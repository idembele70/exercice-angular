import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, timer, switchMap, map } from 'rxjs';

import { User } from '../../../models/mid/day-11/user.models';

interface Response {
  users: User[];
  total: number;
  skip: number;
  limit: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users$ = new BehaviorSubject<User[]>([]);
  private readonly url = 'https://dummyjson.com/users/';
  constructor(private readonly http: HttpClient) { }

  fetchUsers$() {
    return this.http.get<Response>(this.url).pipe(
      map(resp => resp.users)
    );
  }

  getUsers$(): Observable<User[]> {
    return this._users$.asObservable();
  }

  getOneUser$(id: number): Observable<User> {
    return timer(2000)
      .pipe(
        switchMap(() => this.http.get<User>(`${this.url}${id}`))
      );
  }

  private get users() { return this._users$.value; }
}
