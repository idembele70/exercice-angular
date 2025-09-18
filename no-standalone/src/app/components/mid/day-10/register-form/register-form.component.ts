import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { UserService } from '../../../../services/mid/day-10/user.service';
import { passwordMatchValidator } from '../../../../validators/mid/day-10/password-match.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  readonly data$ = new Subject<string>();
  private readonly _passwordMinLength = 8;
  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService
  ) {}

  readonly registerForm = this.fb.nonNullable.group(
  {
    email: [
      '',
      [Validators.required, Validators.email],
      this.userService.isEmailTaken()
    ],
    password: ['', [Validators.required, Validators.minLength(this._passwordMinLength)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(this._passwordMinLength)]],
  },
  {
    updateOn: 'blur',
    validators: [passwordMatchValidator],
  }
  );

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get isFormInvalidOrPending() {
    return this.registerForm.invalid || this.registerForm.pending
  }

  get isPasswordMisMatch() {
    return (
      this.password?.valid &&
      this.confirmPassword?.valid &&
      !this.password?.hasError('minlength') &&
      !this.confirmPassword?.hasError('minlength') &&
      this.registerForm.hasError('passwordMisMatch')
      );
  }

  onSubmit() {
    if (this.isFormInvalidOrPending) return;

    const { email, password } = this.registerForm.getRawValue();
    this.userService.addUser(email, password);

    const rawValue = this.registerForm.getRawValue();
    this.data$.next(JSON.stringify(rawValue, null, 2));
    this.registerForm.reset({}, { emitEvent: false });
  }
}
