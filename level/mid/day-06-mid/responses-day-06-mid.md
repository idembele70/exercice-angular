====
QCM
====
1. A, B, C, 
2. A
3. D
4. A, B, C
5. A, B, C, 

=====
CODE
=====
6. ```html
<form [formGroup]="emailForm" (ngSubmit)="onSubmit()">
  <input type="text" name="username" placeholder="Enter your username" formControlName="username" autocomplete="username"><br>
  <span *ngIf="username?.touched && username?.invalid">Username is required</span>
  <div formArrayName="emails">
    <div *ngFor="let email of emails.controls; let $index = index;" [formGroupName]="$index">
      <input type="email" name="email" autocomplete="email" placeholder="Enter your email" formControlName="email">
      <button type="button" (click)="onRemoveEmail($index)">Delete</button>
      <br>
      <span *ngIf="isInvalid($index)">Email is required and should be a valid email</span><br>
      
    </div>
  </div>
  <button type="button" (click)="onAddEmail()">Add email</button>
  <button type="submit">Submit</button>
</form>
<pre>
{{ data }}
</pre>
```
```ts
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgIf],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  data = '';
  readonly emailForm = this.fb.nonNullable.group(
  {
    username: ['', Validators.required],
    emails: this.fb.array([]),
  },
  {
    updateOn: 'blur',
  }
  );
  
  constructor(private readonly fb: FormBuilder) { }

  get username() {
    return this.emailForm.get('username');
  }

  get emails() {
    return this.emailForm.get('emails') as FormArray;
  }

  isInvalid(index: number) {
    const control = this.emails.at(index).get('email');
    return control?.touched && control?.invalid;
  }

  onAddEmail() {
    const emailControl = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.emails.push(emailControl);
  }

  onRemoveEmail(index: number) {
    this.emails.removeAt(index);
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.data = JSON.stringify(this.emailForm.value, null, 2);
      this.emailForm.reset();
    }
  }
}
```
7. ```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError, switchMap } from 'rxjs';

import { User } from '../../../models/mid/day-06/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly users$ = new BehaviorSubject<User[]>([]);
  private readonly url = new URL('users', 'https://jsonplaceholder.typicode.com/');

  constructor(private readonly httpClient: HttpClient) {};

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  fetchUsers() {
    const users = this.users$.value;

    if (!users.length)
      this.refreshUsers();
  }

  refreshUsers() {
    this.httpClient.get<User[]>(this.url.href).pipe(
      tap((u) => this.users$.next(u)),
      catchError(err => throwError(() => err))
    ).subscribe()
  }
}
```
8. ```ts
import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const { pathname } = new URL(req.url)

  if (pathname === '/login')
    return next(req);

  console.log('Request intercepted');

  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  const newReq = req.clone({
    headers
  });
  
  return next(newReq);
};
```
9. ```ts
// password-match.validators
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (group: AbstractControl<FormGroup>): ValidationErrors | null => {
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value)
    return { passwordMisMatch: true };

  return null;
}

// register-form.component
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
```
```html
 <!-- register-form.html -->
<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  <input type="text" name="username" placeholder="Enter your username" autocomplete="username" formControlName="username"><br>
  <input type="password" name="password" placeholder="Enter your password" autocomplete="new-password" formControlName="password"><br>
  <input type="text" name="confirmPassword" placeholder="Confirm your password" autocomplete="off" formControlName="confirmPassword"><br>
  <div *ngIf="registerForm.hasError('passwordMisMatch')">Your passwords are not equal</div>
  <button type="submit" [disabled]="!registerForm.valid">Submit</button>
</form>
<pre> {{ passwords$ | async }}</pre>
```
10. ```ts
import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

import { ErrorService } from '../../../services/mid/day-06/error.service'

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);
  //const errorService = inject(ErrorService)

  return next(req).pipe(
    catchError(errRes => {
      if (errRes.status === 401)
        router.navigate(['/login']);

      if (errRes.status === 500) {
        //errorService.setMessage('Erreur serveur');
        alert('Erreur server')
      }
    return throwError(() => errRes)
    })
  );
};
```
