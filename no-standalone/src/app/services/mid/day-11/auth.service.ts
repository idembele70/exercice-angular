import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _storageKey = 'day-11-auth';
  private readonly _isLoggedIn$ = new BehaviorSubject(this.loadFromStorage());

  constructor() { }

  login() {
    const next = true;
    this._isLoggedIn$.next(next);
    this.saveToStorage(next);
  }

  logout() {
    const next = false;
    this._isLoggedIn$.next(next);
    this.saveToStorage(next);
  }

  isLoggedIn() {
    return this._isLoggedIn$.value;
  }

  token() {
    return 'day-11-auth-secret-token';
  }

  private saveToStorage(value: boolean) {
    localStorage.setItem(this._storageKey, JSON.stringify(value));
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(this._storageKey);
    return stored ? JSON.parse(stored) : false;
  }
}
