import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable, tap, of, timer, switchMap, map } from 'rxjs';

import { User } from '../../../models/mid/day-09/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users/';
  private readonly users$ = new BehaviorSubject<User[]>([]);
  
  constructor(private readonly httpClient: HttpClient) { }

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  loadUsers() {
    if (this.users.length) return;
    this.refreshUsers()
  }

  refreshUsers() {
    this.httpClient.get<User[]>(this.url).pipe(
      tap((users) => this.users$.next(users))
    ).subscribe()
  }

  shuffle(id: number) {
    const user = this.users.find(u => u.id === id) as User;
    const users = this.users.filter(u => u.id !== id);
    this.users$.next([{...user, username: user.username + 1}, ...users]);
  }

  private get users() { return this.users$.value }

  isTaken(username: string): Observable<boolean> {
    const userExist = this.users.findIndex(user => user.username == username) !== -1;
    return of(userExist);
  }

  isTakenAsync(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ usernameExists: boolean } | null> => {
      if (!control.value) return of(null);
      return timer(500).pipe(
        switchMap(() => this.isTaken(control.value)),
        map((exists) => exists ? { usernameExists: true } : null ),
        tap(console.log)
      );
    }
  }
}
