import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/mid/day-04/auth.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrl: './logged.component.scss'
})
export class LoggedComponent {

  constructor(private readonly authService: AuthService, private readonly router: Router) {};
  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
