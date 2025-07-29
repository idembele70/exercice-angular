import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../models/day/ten/post';
import { Observable, catchError, of } from 'rxjs';

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
