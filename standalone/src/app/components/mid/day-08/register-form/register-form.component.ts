import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { passwordMatch } from '../../../../validators/mid/day-08/password-match.validator';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  readonly formData$ = new BehaviorSubject('');
  readonly form = this.fb.nonNullable.group(
  {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  },
  {
    updateOn: 'blur',
    validators: passwordMatch,
  },
  );
  constructor(private readonly fb: FormBuilder) {}

  onSubmit() {
    if (this.form.invalid) return;
    const formValue = JSON.stringify(this.form.getRawValue(), null, 2);
    this.formData$.next(formValue);
    this.form.reset(); 
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.dirty && control?.invalid
  }

  get passwordMisMatch() {
    return this.form.hasError('misMatch');
  }
}
