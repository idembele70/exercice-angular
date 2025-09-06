import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { AuthService } from '../../../../services/mid/day-08/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private readonly authService: AuthService) { };

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
