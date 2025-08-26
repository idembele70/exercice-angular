import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { LimitWordsPipe } from '../../pipes/mid/day-02/limit-words/limit-words.pipe';
import { AutoFocusDirective } from '../../directives/mid/day-02/auto-focus/auto-focus.directive';
import { LoginFormComponent } from '../mid/day-02/login-form/login-form.component';
import { UserListComponent } from '../mid/day-02/user-list/user-list.component';
import { AuthService } from '../../services/mid/day-02/auth/auth.service';
import { LifecycleComponent } from '../mid/day-02/lifecycle/lifecycle.component';
import { HoverClassDirective } from '../../directives/mid/day-02/hover-class/hover-class.directive';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [LimitWordsPipe, AutoFocusDirective, LoginFormComponent, UserListComponent, NgIf, LifecycleComponent, HoverClassDirective],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
  private readonly authService = inject(AuthService);

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get role() {
    return this.authService.role;
  }
}
