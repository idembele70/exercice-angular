import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  constructor (private fb: FormBuilder){}
  readonly form = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(10)]],
  });

  
  get PasswordsDoNotMatch() : boolean {
    const { password, confirmPassword } = this.form.value;
    return !!password && !!confirmPassword && (password !== confirmPassword)
  }
  
  
  onSubmit() {
    if(this.form.valid && !this.PasswordsDoNotMatch)
      console.log(this.form.value)
  }
  disabledBtn = true;
}
