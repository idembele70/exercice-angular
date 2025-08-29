import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, interval, take, tap } from 'rxjs';

import { Post } from '../../../models/mid/day-06/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/s/';
  private readonly url = new URL('posts', this.baseUrl);
  private readonly url$ = new BehaviorSubject(this.url.href);
  readonly #posts$ = new BehaviorSubject<Post[]>([]);

  constructor(private readonly http: HttpClient) {};
  
  getPosts$(): Observable<Post[]> {
    return this.#posts$.asObservable();
  }

  fetchPosts() {
    const posts = this.#posts$.value;

   if (posts.length) return;
    this.refreshPosts()
  }

  refreshPosts() {
    this.url$.pipe(
      switchMap((url) => this.http.get<Post[]>(url))
    ).subscribe(p => {
      this.#posts$.next(p);
    })
  }
}
