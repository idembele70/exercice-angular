====  
QCM
====
1. A, B
2. B, D
3. D
4. D
5. A, B, D

=====
CODE
=====
6. ```html
<h1>{{ count$ | async }}</h1>
<div class="btn-wrapper">
  <button type="button" (click)="onIncrement()" [disabled]="maxCount">Increment</button>
  <button type="button" (click)="onDecrement()">Decrement</button>
</div>
```
```js
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly count$ = new BehaviorSubject(0);
  private readonly step = 1;

  onIncrement() {
    if (this.maxCount) return;
    this.count$.next(this.count + this.step);
  }

  onDecrement() {
    this.count$.next(this.count - this.step); 
  }

  private get count() {
    return this.count$.value;
  }

  get maxCount() {
    return this.count >= 10;
  }
}
```
7. ```ts
import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, Subscription } from 'rxjs';

@Pipe({
  name: 'betterAsync'
})
export class BetterAsyncPipe implements PipeTransform {
  private latestValue = '';

  transform(value$: Observable<string>, destroy$: Subject<void>): string {
    const valueSubscription$ = value$
    .pipe(takeUntil(destroy$))
    .subscribe(value =>
      this.latestValue = value
    )
    destroy$.subscribe({ complete: () => valueSubscription$.unsubscribe() });
    return this.latestValue || 'Loading...'
  }
}
```
8. ```ts
import { Directive, ElementRef, Renderer2, OnInit, OnDestroy  } from '@angular/core';
import { Subject, takeUntil, interval, take } from 'rxjs';

import { RoleService } from '../../../services/mid/day-09/role.service';

@Directive({
  selector: '[appIfRole]'
})
export class IfRoleDirective implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2, private readonly roleService: RoleService) { }

  ngOnInit() {
  //interval(1500).pipe(take(1)).subscribe(()=> this.destroy$.next())
   this.roleService.getRole$()
   .pipe(takeUntil(this.destroy$))
   .subscribe(role => {
      if (role === 'user')
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      else
        this.renderer.removeStyle(this.el.nativeElement, 'display');
   })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```
9. ```html
<!--user-list.component.html-->
<ul>
  <app-user *ngFor="let user of (users$ | async); trackBy: trackById" [name]="user.name" [id]="user.id"></app-user>
</ul>
```
```ts
// user-list.component.ts
constructor (private readonly userService: UserService) {}
  readonly users$ = this.userService.getUsers$();
  onLoadUsers() {
    this.userService.loadUsers();
  }

    trackById(index:number, user: User) {
    return user.name;
  }
```
```html
<!--user.component.html-->
<li>{{name }}<button type="button" (click)="onShuffle(id)">Shuffle</button></li>
```
```ts
// user.component.ts
import { Component, inject, Input, AfterViewChecked } from '@angular/core';

import { UserService } from '../../../../services/mid/day-09/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements AfterViewChecked {
  private readonly userService = inject(UserService);
  @Input() name: string = '';
  @Input() id: number = 0;

  ngAfterViewChecked() {
    console.log('Change detected');
  }

  onShuffle(id: number) {
    this.userService.shuffle(id);
  }
}
// user.seervice.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { User } from '../../../models/mid/day-09/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users/';
  private readonly users$ = new BehaviorSubject<User[]>([]);
  
  constructor(private readonly httpClient: HttpClient) { }

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  loadUsers() {
    if (this.users.length) return;
    this.refreshUsers()
  }

  refreshUsers() {
    this.httpClient.get<User[]>(this.url).pipe(
      tap((users) => this.users$.next(users))
    ).subscribe()
  }

  shuffle(id: number) {
    const user = this.users.find(u => u.id === id) as User;
    const users = this.users.filter(u => u.id !== id);
    this.users$.next([user, ...users]);
  }

  private get users() { return this.users$.value }
}
```
10. ```html
<!--sign-up-form.component.html-->
<form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="username">Username:</label><br>
    <input type="text" autocomplete="username" name="username" id="username" formControlName="username"><br>
    <span *ngIf="username?.touched && username?.invalid && !username?.hasError('usernameExists')">Username should contain at least 4 characters</span>
    <span *ngIf="username?.hasError('usernameExists')">This username is taken</span>
  </div>
  <div>
    <label for="password">Password:</label><br>
    <input type="password" autocomplete="new-password" name="password" id="password" formControlName="password"><br>
    <span *ngIf="password?.touched && password?.invalid">Your password should contain at least 8 characters</span>
    <span *ngIf="passwordMisMatch && password?.valid">Your password are differents</span>
  </div>
  <div>
    <label for="confirm-password">Confirm password:</label><br>
    <input type="password" autocomplete="off" name="confirm-password" id="confirm-password" formControlName="confirmPassword"><br>
    <span *ngIf="confirmPassword?.touched && confirmPassword?.invalid">Your password confirmation should contain at least 8 characters</span>
    <span *ngIf="passwordMisMatch && confirmPassword?.valid">Your password are differents</span>
  </div><br>
  <button type="submit">Sign up</button>
</form>
<pre>{{ data$ | async }}</pre>
```
```ts
// sign-up-form.component.ts
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
    username: ['', [Validators.required, Validators.minLength(4)], this.userService.isTakenAsync()],
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
// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable, tap, of, timer, switchMap, map } from 'rxjs';

import { User } from '../../../models/mid/day-09/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users/';
  private readonly users$ = new BehaviorSubject<User[]>([]);
  
  constructor(private readonly httpClient: HttpClient) { }

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  loadUsers() {
    if (this.users.length) return;
    this.refreshUsers()
  }

  refreshUsers() {
    this.httpClient.get<User[]>(this.url).pipe(
      tap((users) => this.users$.next(users))
    ).subscribe()
  }

  shuffle(id: number) {
    const user = this.users.find(u => u.id === id) as User;
    const users = this.users.filter(u => u.id !== id);
    this.users$.next([user, ...users]);
  }

  private get users() { return this.users$.value }

  isTaken(username: string): Observable<boolean> {
    const userExist = this.users.findIndex(user => user.username == username) !== -1;
    return of(userExist);
  }

  isTakenAsync(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ usernameExists: boolean } | null> => {
      if (!control.value) return of(null);
      return timer(500).pipe(
        switchMap(() => this.isTaken(control.value)),
        map((exists) => exists ? { usernameExists: true } : null ),
        tap(console.log)
      );
    }
  }
}
// password-match.validator.ts
import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (group: AbstractControl<FormGroup>): ValidationErrors | null => {
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');

  if (!password?.value || !confirmPassword?.value) return null;

  return password.value === confirmPassword.value ? null : { misMatch: true }

}
```
