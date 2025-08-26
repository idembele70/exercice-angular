import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Post } from '../../../../../models/beginner/day/ten/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';
  
  getPosts$(): Observable<Post[]> {
    const url = new URL("posts", this.baseUrl).toString();
    return this.http.get<Post[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }
}
