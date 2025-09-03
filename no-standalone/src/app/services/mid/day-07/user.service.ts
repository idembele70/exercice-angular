import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User, Role } from '../../../models/mid/day-07/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly user$ = new BehaviorSubject<User>({
    name: 'toto',
    status: 'disconnected',
    role: 'user',
  });
  
  getUser$(): Observable<User> {
    return this.user$.asObservable();
  }

  login() {
    const user = this.userValue;
    this.user$.next({ ...user, status: 'connected' });
  }

  logout() {
    const user = this.userValue;
    this.user$.next({ ...user, status: 'disconnected' });
  }

  isLoggedIn() {
    const user = this.userValue;
    return user.status === 'connected';
  }

  setRole(role: Role) {
    const user = this.userValue;
    this.user$.next({ ...user, role });
  }

  isAdmin() {
    const user = this.userValue;
    return user.role === 'admin';
  }

  setName(name: string) {
    const user = this.userValue;
    this.user$.next({ ...user, name });
  }

  private get userValue() {
    return this.user$.value;
  }
}
