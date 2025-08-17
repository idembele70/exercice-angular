import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../../../../validators/beginner/day/ten/password-strength.validator';

@Component({
  selector: 'app-password-strength-validator',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './password-strength-validator.component.html',
  styleUrl: './password-strength-validator.component.scss'
})
export class PasswordStrengthValidatorComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordStrengthValidator()]],
  });
  onSubmit() {
    console.log(this.form.controls);
    this.form.reset();
  }

  get password() {
    return this.form.controls['password'];
  }
}
