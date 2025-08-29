import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { passwordMatchValidator } from '../../../../validators/mid/day-06/password-match.validator';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  readonly passwords$ = new BehaviorSubject('');
  private readonly fb = inject(FormBuilder);

  readonly registerForm = this.fb.nonNullable.group(
  {
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }, 
  {
    validators: passwordMatchValidator,
    updateOn: 'blur',
  }
  );

  onSubmit() {
    if (this.registerForm.valid) {
      const valueStringify = JSON.stringify(this.registerForm.getRawValue(), null, 3);
      this.passwords$.next(valueStringify);
      this.registerForm.reset();
      }
  }
}
