import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingSpinnerComponent } from "./components/day/two/loading-spinner/loading-spinner.component";
import { LoginFormComponent } from "./components/day/two/login-form/login-form.component";
import { UserCardComponent } from "./components/day/two/user-card/user-card.component";
import { LoginCredentials, User } from './models/day/two/user';
import { TruncatePipe } from './pipes/day/two/truncate.pipe';
import { AutoFocusDirective } from './directives/day/two/auto-focus.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TruncatePipe, UserCardComponent, LoginFormComponent, LoadingSpinnerComponent, NgIf, AutoFocusDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly user: User = {
    name: 'titi',
    email: 'titi@mail.in'
  }
  loginCredentials: LoginCredentials = {
    email: '',
    password: ''
  }
  getLoginCredentials(loginCredentials: LoginCredentials){
    this.loginCredentials = loginCredentials;
  }
  readonly isLoading: boolean = true
}
