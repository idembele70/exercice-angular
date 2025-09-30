====
QCM
====
1. B,D
2. A, B , D
3. C, D
4. A, B, 
5. A, B, C, 
=====
CODE
=====
6. ```ts
// user.service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { User } from '../../../models/mid/day-11/user.models';

interface Response {
  users: User[];
  total: number;
  skip: number;
  limit: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users$ = new BehaviorSubject<User[]>([]);
  private readonly url = 'https://dummyjson.com/users';
  constructor(private readonly http: HttpClient) { }

  fetchUsers() {
    return this.http.get<Response>(this.url).pipe(
      tap(resp => this._users$.next(resp.users))
    );
  }

  getUsers$(): Observable<User[]> {
    return this._users$.asObservable();
  }

  private get users() { return this._users$.value; }
}
// user.models.ts
export interface User {
  id: number;
  firstName: string;
  lastName: string;
}
// capitalize-name.pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeName'
})
export class CapitalizeNamePipe implements PipeTransform {

    transform(value: string): string {
      if (!value) return '';
      return value.replace(/\w+/, m => {
        return m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
      });
    }
}
// user-list.component
<ul class="list-group p-2 c-">
  <li class="list-group-item w-50" role="button" *ngFor="let user of (users$ | async)">
    {{ user.firstName | capitalizeName }} {{ user.lastName | uppercase }}
  </li>
</ul>

// user-list.component.html
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { UserService } from '../../../../services/mid/day-11/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
  readonly users$ = this.userService.getUsers$();
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```
7. ```ts
import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverClass]'
})
export class HoverClassDirective {
  @Input({ required: true }) appHoverClass!: string;
  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.appHoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.appHoverClass);
  }

}
```
8. ```html
<!--login.component.html-->
<button *ngIf="isLoggedOut" type="button" class="btn btn-outline-success" (click)="onLogin()">Login</button>
<button *ngIf="isLoggedIn" type="button" class="btn btn-outline-danger" (click)="onLogout()">Logout</button>
```
```ts
// login.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../../services/mid/day-11/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    ) {
      console.log(this.route);
    }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get isLoggedOut() {
    return !this.authService.isLoggedIn();
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}

// app-routing.module.ts
  {
    path: 'day-11/login',
    component: LoginComponent,
  },
  {
    path: 'day-11/profile/:id',
    component: ProfileComponent,
    resolve: {
      user: UserResolver,
    },
    canActivate: [AuthGuard]
  }
    
];
// user.resolver.ts
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from '../../../services/mid/day-11/user.service';
import { User } from '../../../models/mid/day-11/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private readonly userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.params['id'];
    return this.userService.getOneUser$(id);
  }
}
// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _storageKey = 'day-11-auth';
  private readonly _isLoggedIn$ = new BehaviorSubject(this.loadFromStorage());

  constructor() { }

  login() {
    const next = true;
    this._isLoggedIn$.next(next);
    this.saveToStorage(next);
  }

  logout() {
    const next = false;
    this._isLoggedIn$.next(next);
    this.saveToStorage(next);
  }

  isLoggedIn() {
    return this._isLoggedIn$.value;
  }

  private saveToStorage(value: boolean) {
    localStorage.setItem(this._storageKey, JSON.stringify(value));
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(this._storageKey);
    return stored ? JSON.parse(stored) : false;
  }
}
// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { User } from '../../../models/mid/day-11/user.models';

interface Response {
  users: User[];
  total: number;
  skip: number;
  limit: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users$ = new BehaviorSubject<User[]>([]);
  private readonly url = 'https://dummyjson.com/users/';
  constructor(private readonly http: HttpClient) { }

  fetchUsers() {
    return this.http.get<Response>(this.url).pipe(
      tap(resp => this._users$.next(resp.users))
    );
  }

  getUsers$(): Observable<User[]> {
    return this._users$.asObservable();
  }

  getOneUser$(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${id}`);
  }

  private get users() { return this._users$.value; }
}
// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '../../../services/mid/day-11/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      if (!this.authService.isLoggedIn())
        return this.router.parseUrl('/day-11/login');
      return true;
  } 
}
// profile.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from '../../../../models/mid/day-11/user.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  user!: User;

  ngOnInit() {
   this.route.data.subscribe(data => this.user = data['user']);
  }
}
```
```html
<!--profile.component.html-->
<h3>Welcome to your profile page: {{ user.firstName }} {{ user.lastName }}</h3>
```
9. ```ts
// post.models
export interface Post {
  id: number;
  title: string;
  body: string;
}
// post.service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  catchError,
  throwError,
  Observable,
} from 'rxjs';

import { Post } from '../../../models/mid/day-11/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly _url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }

  getPosts$(): Observable<Post[]> {
    return this.http.get<Post[]>(this._url)
      .pipe(
        catchError(err => throwError(err))
      );
  }
}
// auth.interceptors
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../../../services/mid/day-11/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.token();

    if (!token)
      return next.handle(request);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const newReq = request.clone({
      headers
    });
    console.log(newReq);
    return next.handle(newReq);
  }
}
// auth.service.ts

  token() {
    return 'day-11-auth-secret-token';
  }
// post-list.component.ts
import { Component } from '@angular/core';

import { Post } from '../../../../models/mid/day-11/post.models';
import { PostService } from '../../../../services/mid/day-11/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  readonly posts$ = this.postService.getPosts$();
  constructor(private readonly postService: PostService) {}
  
  trackById(_: number, post: Post) {
    return post.id
  }
}
// app.module
  providers: [
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AsyncPipe,
  ],
```
```html
<ul class="list-group list-group-flush">
  <li class="list-group-item" *ngFor="let post of (posts$ | async); trackBy: trackById">
   {{ post.title }}
  </li>
</ul>
```
10. ```html
<!--register-form.component
<form [formGroup]="registerForm" class="row w-50 p-2 mx-auto mb-2 justify-content-center" (ngSubmit)="onSubmit()">
  <div class="row mb-3 justify-content-center">
    <div class="col-6">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" autocomplete="email" id="email" formControlName="email">
      <div *ngIf="email?.dirty && email?.invalid" class="text-danger">
        Please provide a valid email
      </div>
    </div>
  </div>
  <div class="row mb-3 justify-content-center">
    <div class="col-6">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" autocomplete="new-password" id="password" formControlName="password">
      <div *ngIf="password?.dirty && password?.invalid" class="text-danger">
        Please provide a valid password
      </div>
      <div *ngIf="misMatchPassword" class="text-danger">
        Your passwords are divergent.
      </div>
    </div>
  </div>
  <div class="row mb-3 justify-content-center">
    <div class="col-6">
      <label for="confirmPassword" class="form-label">Confirm password</label>
      <input type="text" class="form-control" autocomplete="off" id="confirmPassword" formControlName="confirmPassword">
      <div *ngIf="confirmPassword?.dirty && confirmPassword?.invalid" class="text-danger">
        Please provide a valid password
      </div>
      <div *ngIf="misMatchPassword" class="text-danger">
        Your passwords are different.
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4 d-flex justify-content-center">
      <button class="btn btn-success" type="submit" [disabled]="!registerForm.valid">Submit</button>
    </div>
  </div>
</form>
<pre>{{ data$ | async }}</pre>
```
```ts
//register-form.component
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
//password-match.validator
import { ValidatorFn, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = function(group: AbstractControl<FormGroup>): ValidationErrors | null {
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');

  if (!password || !confirmPassword) return null;
  return password.value === confirmPassword.value ? null : { misMatchPassword: true };
}
```
