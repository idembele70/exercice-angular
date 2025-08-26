import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { User } from '../../../models/mid/day-04/user';
import { Todo } from '../../../models/mid/day-04/todo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';
  private readonly http = inject(HttpClient);

  getUsers$(): Observable<User[]> {
  const url = new URL('users', this.baseUrl).href;
    return this.http.get<User[]>(url).pipe(
      catchError((err) => throwError(() => err))
    )
  }

  getTodos$(): Observable<Todo[]> {
    const urlHref = new URL('todos', this.baseUrl).href;

    return this.http.get<Todo[]>(urlHref).pipe(
      catchError(err => { throw err; })
    )
  }
}
