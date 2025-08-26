import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'day-04-auth';
  private isLogged = this.loadFromStorage();

  isLoggedIn() {

    return this.isLogged;
  }

  login() {
    this.isLogged = true;
    this.setStorage(true)  
  }

  logout() {
    this.isLogged = false;
    this.setStorage(false);
  }

  private loadFromStorage() {
    const stored = sessionStorage.getItem(this.storageKey);
    
      return stored ? JSON.parse(stored) : false
  }

  private setStorage(value: boolean) {
    sessionStorage.setItem(this.storageKey, JSON.stringify(value));
  }
}
