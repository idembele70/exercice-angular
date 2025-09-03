import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { passwordMatchValidator } from '../../../../validators/mid/day-07/password-match.validator'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  readonly data$ = new BehaviorSubject('');
  private readonly fb = inject(FormBuilder);
  readonly formForRegister = this.fb.nonNullable.group({
    username: ['', Validators.minLength(3)],
    emails: this.fb.array([
      this.fb.nonNullable.group({
        email: ['', [Validators.email]],
      }),
    ]),
    password: [''],
    confirmPassword: [''],
  },
  {
    validators: [Validators.required, passwordMatchValidator],
    updateOn: 'blur',
  }
  );

  get emails() {
    return this.formForRegister.get('emails') as FormArray;
  }

  private createEmailForm() {
    return this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addEmailForm() {
    this.emails.push(this.createEmailForm());
  }

  removeEmailForm(index: number) {
    if (index === 0) return;
    this.emails.removeAt(index);
  }

  get username() {
    return this.formForRegister.get('username');
  }

  get password() {
    return this.formForRegister.get('password');
  }

  get confirmPassword() {
    return this.formForRegister.get('confirmPassword');
  }

  onSubmit() {
    if (this.formForRegister.invalid) return;

    const newData = JSON.stringify(this.formForRegister.getRawValue(), null, 2);
    this.data$.next(newData);
    this.formForRegister.reset();
  }
}
