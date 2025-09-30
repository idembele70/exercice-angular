import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  catchError,
  throwError,
  Observable,
} from 'rxjs';

import { Post } from '../../../models/mid/day-11/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly _url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }

  getPosts$(): Observable<Post[]> {
    return this.http.get<Post[]>(this._url)
      .pipe(
        catchError(err => throwError(() => err))
      );
  }
}
