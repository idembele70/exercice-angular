import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginCredentials } from '../../../../models/day/two/user';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() loginCredentialsChange: EventEmitter<LoginCredentials> = new EventEmitter();
  onSubmit(form: NgForm) {
    if(form.valid){
      const credentials = form.value as LoginCredentials
      this.loginCredentialsChange.emit(credentials)
    }
  }
}
