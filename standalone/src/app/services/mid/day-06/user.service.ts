import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError, switchMap } from 'rxjs';

import { User } from '../../../models/mid/day-06/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly users$ = new BehaviorSubject<User[]>([]);
  private readonly url = new URL('users', 'https://jsonplaceholder.typicode.com/');

  constructor(private readonly httpClient: HttpClient) {};

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  fetchUsers() {
    const users = this.users$.value;

    if (!users.length)
      this.refreshUsers();
  }

  refreshUsers() {
    this.httpClient.get<User[]>(this.url.href).pipe(
      tap((u) => this.users$.next(u)),
      catchError(err => throwError(() => err))
    ).subscribe()
  }
}
