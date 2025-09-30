import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../../services/mid/day-11/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private readonly authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get isLoggedOut() {
    return !this.authService.isLoggedIn();
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
