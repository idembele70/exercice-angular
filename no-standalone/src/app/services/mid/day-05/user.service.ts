import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError, map } from 'rxjs';

import { User } from '../../../models/mid/day-05/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';
  private readonly http = inject(HttpClient);
  getUsers$() {
    const urlHref = new URL('users', this.baseUrl).href;
    return this.http.get<User[]>(urlHref)
      .pipe(
      map(users => users.map(u => ({...u, age: this.randomAge }))),
      catchError(err => throwError(err))
      );
  }

  get randomAge() {
    const age = Math.random().toString().substring(2, 4);
    return Number(age)
  }
}
