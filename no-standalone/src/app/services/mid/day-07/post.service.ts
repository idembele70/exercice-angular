import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError, tap } from 'rxjs';

import { Post } from '../../../models/mid/day-07/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly posts$ = new BehaviorSubject<Post[]>([]);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private readonly http: HttpClient) { };

  loadPosts$(): Observable<Post[]> {
    const posts = this.posts$.value;
    if (posts.length) return this.posts$.asObservable();

    const url = new URL('posts', this.baseUrl);
    return this.http.get<Post[]>(url.href)
    .pipe(
      tap(posts => this.posts$.next(posts)),
      catchError(err => throwError(() => err))
    )
  }

  getPosts$(): Observable<Post[]> {
    return this.posts$.asObservable();
  }
}
