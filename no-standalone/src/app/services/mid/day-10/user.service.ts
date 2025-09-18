import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { BehaviorSubject, timer, switchMap, map, of, Observable } from 'rxjs';

import { User } from '../../../models/mid/day-10/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users$ = new BehaviorSubject<User[]>([]);
  private readonly _dueTime = 500;

  emailExists(email: string) {
    const index = this._users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    return of(index !== -1);
  }

  isEmailTaken(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ emailExists: boolean} | null> => {
      if (!control.value)
        return of(null);

      return timer(this._dueTime)
        .pipe(
          switchMap(() => this.emailExists(control.value)),
          map(exists => exists ? { emailExists: true } : null)
        );
    }
  }

  addUser(email: string, password: string) {
    const user = {
      id: Math.random().toString(16).slice(2),
      email,
      password,
    }
    this._users$.next([...this._users, user]);
  }

  private get _users() {
    return this._users$.value;
  }
}
