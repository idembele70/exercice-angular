import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  role = 'client';

  login() {
      this.isLogin = true;
      this.role = 'admin';
      sessionStorage.setItem('LOGGED', this.isLogin.toString());
      sessionStorage.setItem('ROLE', this.role);
     // return of({ success: this.isLoggedIn, role: this.role});
  }

  logout() {
    this.isLogin = false;
    this.role = 'client';
    sessionStorage.setItem('LOGGED', this.isLogin.toString());
    sessionStorage.setItem('ROLE', this.role)
    // return of({ success: this.isLoggedIn, role: this.role });
  }

  isLoggedIn() {
    const loggedIn = sessionStorage.getItem('LOGGED');
    if (loggedIn === 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  get isAdmin() {
    const role = sessionStorage.getItem('ROLE');
    return role === 'admin';
  }
}
