====
QCM
====
1. B
2. C
3. A
4. A
5. C

=====
CODE
=====
1. 
ts```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords',
  standalone: true
})
export class LimitWordsPipe implements PipeTransform {

  transform(str: string, limit: number): string {
  const arrayOfWords = str.split(' ');
    if (arrayOfWords.length <= limit)
      return str
    return arrayOfWords.slice(0, limit).join('') + '...';
  }

}
```
2.
ts```
import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective {

  constructor(private readonly el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
```
3. 
ts```
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.minLength(8)],
  });

  onSubmit () {
    console.log(this.form.value);
    this.form.reset();
  }
}
```
html```
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" name="email" id="email" placeholder="Enter your email" autoComplete="email" formControlName="email"/>
  <input type="password" name="password" id="password" placeholder="Enter your password" autoComplete="password" formControlName="password"/>
  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>
```
4. user.ts
ts```
export interface User {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
}
```
user.service.ts
ts```
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../../../../models/mid/day-02/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userList$ = new BehaviorSubject<User[]>([
  {
    id: '4545',
    firstname: 'john',
    lastname: 'doe',
    age: 25,
  },
  {
    id: '5487',
    firstname: 'jane',
    lastname: 'lane',
    age: 50,
  },
  ])
  
  addUser (user: User) {
    const users = this.userList$.value;
    this.userList$.next([...users, user]);
  }

  getUsers$ () {
    return this.userList$.asObservable();
  }

  getOneUser (id: string): User {
    return this.userList$.value.find(user => user.id === id) as User;
  }
}
```
5. 
html```
<ul>
  <li *ngFor="let user of (userList$ | async) ||  []">
   Hello {{ user.firstname }} {{ user.lastname }}, you are {{ user.age }} years old :)
  </li>
</ul>
```
ts```
import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserService } from '../../../../services/mid/day-02/user/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  readonly userList$ = this.userService.getUsers$();
  constructor(private readonly userService: UserService) { }
}
```
6. 
app.route.ts
ts```
  {
    path: 'profile/:id',
    component: UserComponent,
  },
```
user.component.html
html```
<h1>{{ user.firstname }}</h1>
<h2>{{ user.lastname }}</h2>
<h3>{{ user.age }}</h3>
```
user.component.ts
ts```
import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../../services/mid/day-02/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../../models/mid/day-02/user'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  private readonly userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private subscription = new Subscription();
  user: User = {
    id: '',
    firstname: '',
    lastname: '',
    age: 0,
  };

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.user = this.userService.getOneUser(id);
  }
}
```
7. 
```ts
//role.guard
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../../../services/mid/day-02/auth/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
    if(authService.isAdmin === false) {
      router.navigate(['/']);
      return false;
    }
  return true;
};
// auth.service
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  role = 'client';

  login() {
      this.isLogin = true;
      this.role = 'admin';
      sessionStorage.setItem('LOGGED', this.isLogin.toString());
      sessionStorage.setItem('ROLE', this.role);
     // return of({ success: this.isLoggedIn, role: this.role});
  }

  logout() {
    this.isLogin = false;
    this.role = 'client';
    sessionStorage.setItem('LOGGED', this.isLogin.toString());
    sessionStorage.setItem('ROLE', this.role)
    // return of({ success: this.isLoggedIn, role: this.role });
  }

  isLoggedIn() {
    const loggedIn = sessionStorage.getItem('LOGGED');
    if (loggedIn === 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  get isAdmin() {
    const role = sessionStorage.getItem('ROLE');
    return role === 'admin';
  }
}

// app.routes
  {
    path: 'profile/:id',
    component: UserComponent,
    canActivate: [roleGuard]
  },
```
8.```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval , Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  interval$ = interval(1000);
  destroy$ = new Subject<void>();

  ngOnInit() {
    console.log('Init');
    this.interval$
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => console.log(v));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```
9. ```ts
import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverClass]',
  standalone: true
})
export class HoverClassDirective {
  @Input({ required: true }) appHoverClass = ''

  constructor(private readonly el: ElementRef, private readonly renderer2: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.addClass(this.el.nativeElement, this.appHoverClass);
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.renderer2.removeClass(this.el.nativeElement, this.appHoverClass);
  }

}
```
10. ```ts
import { LimitWordsPipe } from './limit-words.pipe';

describe('LimitWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitWordsPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "Hello Angular World" to "Hello Angular..."', () => {
    const pipe = new LimitWordsPipe();
    const value = 'Hello Angular world';
    const wordCount = 2;
    const expectedValue = 'Hello Angular...';
    const newValue = pipe.transform(value, wordCount);
    expect(newValue).toEqual(expectedValue);
  })
});
```
