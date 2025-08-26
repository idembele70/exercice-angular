import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { LoginCredentials, User } from './models/beginner/day/two/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
