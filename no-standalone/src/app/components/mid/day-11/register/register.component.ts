import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { passwordMatchValidator } from '../../../../validators/mid/day-11/password-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  readonly data$ = new Subject<string>();

  readonly registerForm = this.fb.nonNullable.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    {
      validators: [passwordMatchValidator],
      updateOn: 'blur',
    },
  );

  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  get misMatchPassword() { return this.registerForm.hasError('misMatchPassword'); }

  constructor(private readonly fb: FormBuilder) { }

  onSubmit() {
    if (!this.registerForm.valid) return;
    this.data$.next(JSON.stringify(this.registerForm.getRawValue(), null, 3));
    this.registerForm.reset();
  }
}
