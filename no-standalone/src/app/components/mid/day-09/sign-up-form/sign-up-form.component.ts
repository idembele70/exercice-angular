import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { UserService } from '../../../../services/mid/day-09/user.service';
import { passwordMatchValidator } from '../../../../validators/mid/day-09/password-match.validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {
  readonly data$ = new BehaviorSubject('');
  constructor(private readonly fb: FormBuilder, private readonly userService: UserService) {}

  readonly signUpForm = this.fb.nonNullable.group(
  {
    username: this.fb.nonNullable.control(
      '',
      {
        validators: [Validators.required, Validators.minLength(4)],
        asyncValidators: this.userService.isTakenAsync(),
        updateOn: 'blur'
      },
    ),
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  },
  {
    updateOn: 'submit',
    validators: passwordMatchValidator
  }
  )

  get username() {
    return this.signUpForm.get('username');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get passwordMisMatch() {
    return this.signUpForm.hasError('misMatch');
  }

  onSubmit() {
    if (!this.signUpForm.valid) return;
    this.data$.next(JSON.stringify(this.signUpForm.getRawValue(), null, 2));
    this.signUpForm.reset();
  }
}
