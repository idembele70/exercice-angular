====
QCM
====
1. A
2. A
3. A, B
4. A
5. A
=====
CODE
=====
6. ```html
<!--register-form.component.html-->
<form [formGroup]="formForRegister" (ngSubmit)="onSubmit()">
  <input type="text" name="username" autocomplete="username" placeholder="Enter your username" formControlName="username"><br>
  <div *ngIf="username?.touched && username?.invalid">Your username should contain at least 3 characters.</div>
    <div formArrayName="emails">
      <div *ngFor="let email of emails.controls; let $index = index;" [formGroupName]="$index">
        <input type="email" name="email" autocomplete="email" placeholder="Enter your email" formControlName="email">
        <button *ngIf="$index !== 0" type="button" (click)="removeEmailForm($index)">Remove</button>
        <div *ngIf="emails.controls.at($index)?.dirty && emails.controls.at($index)?.invalid">Your email should be a valid email</div>
      </div>
    </div>
  <button type="button" (click)="addEmailForm()">Add email</button><br><br>
  <input type="password" id="password" autocomplete="new-password" placeholder="Enter your password" formControlName="password"><br>
  <input type="text" name="confirmPassword" autocomplete="off" placeholder="Confirm your password" formControlName="confirmPassword"><br>
  <button type="submit" [disabled]="!formForRegister.valid">Submit</button>
</form>
<pre>{{ data$ | async }} </pre>
```
```ts
// register-form.component.ts
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
        email: ['', [Validators.required, Validators.email]],
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

  addEmailForm() {
    const emailForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.emails.push(emailForm);
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
```
```ts
// password-match.validator
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms'
export const passwordMatchValidator: ValidatorFn  = (control: AbstractControl<FormGroup>): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value

   return password && confirmPassword && (password === confirmPassword) ? null : { passwordMisMatch: true };
}
```
7. ```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

import { Post } from '../../../models/mid/day-07/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly posts$ = new BehaviorSubject<Post[]>([]);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private readonly http: HttpClient) { };

  fetchPosts() {
    const posts = this.posts$.value;
    if (posts.length) return;

    const url = new URL('posts', this.baseUrl);
    this.http.get<Post[]>(url.href)
    .pipe(
      catchError(err => throwError(() => err))
    )
    .subscribe(
      posts => this.posts$.next(posts)
    )
  }

  getPosts$(): Observable<Post[]> {
    return this.posts$.asObservable();
  }
}
```
8.```ts
import { HttpInterceptorFn, HttpEventType } from '@angular/common/http';
import { catchError, throwError, finalize, tap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('loading...');
  return next(req).pipe(
    catchError(err => throwError(()=>err)),
    tap(event => {
      if (event.type === HttpEventType.Response)
        console.log('Done')
    }),
    finalize(() => console.log('End'))
  );
}
```
9. ```ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../../../services/mid/day-07/user.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.isLoggedIn() || !userService.isAdmin()) {
    router.navigate(['/unauthorized']);
    return false
  }
  return true;
};
```
10. ```ts
import { Pipe, PipeTransform } from '@angular/core';
import { of, map, Observable, catchError } from 'rxjs';

@Pipe({
  name: 'capitalizeAsync'
})
export class CapitalizeAsyncPipe implements PipeTransform {

  transform(value$: Observable<string>): Observable<string> {
    return value$.pipe(
      map(value => {
        if (!value) return '';
        return value.replaceAll(/./g, (match, idx) => {
          if (idx === 0) return match.toUpperCase();
          return match.toLowerCase();
        })
      })
    );
  }
}
```
