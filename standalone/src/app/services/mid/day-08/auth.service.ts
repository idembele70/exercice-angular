import { Injectable } from '@angular/core';

import { AuthDetails } from '../../../models/mid/day-08/auth-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'mid-day-08';

  login() {
    const auth = this.loadFromStorage();
    if (auth.isLogged) return;
    auth.isLogged = true
    this.saveToStorage(auth);
  }

  logout() {
    const auth  = this.loadFromStorage();
   // if (!auth.isLogged) return;
    auth.isLogged = false;
    this.saveToStorage(auth);
  }

  toggleAdmin() {
   const auth = this.loadFromStorage();
   auth.isAdmin = !auth.isAdmin;
   this.saveToStorage(auth);
  }

  isLoggedIn() {
    return this.loadFromStorage().isLogged;
  }

  isAdmin() {
    return this.loadFromStorage().isAdmin;
  }

  private saveToStorage(auth: AuthDetails) {
    localStorage.setItem(this.storageKey, JSON.stringify(auth));
  }

  private loadFromStorage(): AuthDetails {
    const stored = localStorage.getItem(this.storageKey);

    return stored ? JSON.parse(stored) : { isLogged: false, isAdmin: false };
  }

}
