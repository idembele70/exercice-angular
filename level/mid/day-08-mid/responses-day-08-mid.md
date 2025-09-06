====
QCM
====
1. B
2. D
3. B
4. A
5. A

=====
CODE
=====
6. ```html
<!--counter.component.html-->
<h1>{{ count$ | async }}</h1>
<button style="margin-right:8px" type="button" (click)="onIncrement()">Increment</button>
<button type="button" (click)="onDecrement()" [disabled]="cannotDecrement">Decrement</button>
```
```ts
// counter.component.ts
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly count$ = new BehaviorSubject(0);
  private readonly step = 1;

  onIncrement() {
    this.count$.next(this.count + this.step);
  }

  onDecrement() {
    if (this.cannotDecrement) return;

    this.count$.next(this.count - this.step);
  }

  get cannotDecrement() {
    return this.count === 0
  }

  private get count() {
    return this.count$.value;
  }
}
```
7. ```ts
// app.routes.ts
    {
    path: '',
    component: MainViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/mid/day-08/admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
// login.component.ts
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { AuthService } from '../../../../services/mid/day-08/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private readonly authService: AuthService) { };

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
// auth-details.ts
export interface AuthDetails {
  isLogged: boolean;
  isAdmin: boolean;
}
// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../../../services/mid/day-08/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['login']);
    return false;
  }

  if (!authService.isAdmin()) {
    router.navigate(['']);
    return false;
  }
  return true;
};
// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
// amdin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
// main-view.component.ts
import { Component, inject } from '@angular/core';

import { CounterComponent } from '../mid/day-08/counter/counter.component';
import { AuthService } from '../../services/mid/day-08/auth.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
  private readonly authService = inject(AuthService);
  onToggleAdmin() {
    this.authService.toggleAdmin();
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

}

```
```html
<!--login.component.html-->
<button *ngIf="!isLoggedIn" type="button" (click)="onLogin()">Login</button>
<button *ngIf="isLoggedIn" type="button" (click)="onLogout()">Logout</button>
<!--main-view.component.html-->
<button type="button" (click)="onToggleAdmin()">Click Me to become a(n) {{ isAdmin ? 'Non-admin' : 'Admin' }}</button>
<!---->
```
8. ```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (!value) return '';
    if (value.length < length) return value;
    return value.substring(0, length) + '...';
  }

}
```
9. ```ts
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() color = '';
  constructor(private element: ElementRef, private readonly renderer: Renderer2) { }

    @HostListener('mouseover') onMouseOver() {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    }

   @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'color');
   }

}
```
10. ```html
// register-form.component.html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div>
    <input type='email' name="email" placeholder="Enter your email" autocomplete="email" formControlName="email"><br>
    <span *ngIf="isInvalid('email')">Your should enter a valid email</span>
  </div>
  <div>
    <input type="password" name="password" placeholder="Enter your password" autocomplete="new-password" formControlName="password"><br>
    <span *ngIf="misMatchError('password')">Your passwords are differents<br></span>
    <span *ngIf="isInvalid('password')">Your password should contain at least 8 characters</span>
  </div>
  <div>
    <input type="text" name="confirmPassword" placeholder="Confirm your password" autocomplete="off" formControlName="confirmPassword"><br>
    <span *ngIf="misMatchError('confirmPassword')">Your passwords are differents<br></span>
    <span *ngIf="isInvalid('confirmPassword')">Your password should contain at least 8 characters</span>
  </div>
  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>
<pre>{{ formData$ | async }}</pre>
```
```ts
// register-form.component.ts
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

  misMatchError(name: string) {
    return this.form.hasError('misMatch');
  }
}
// password-match.validator
import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const passwordMatch: ValidatorFn = (formGroup: AbstractControl<FormGroup>): ValidationErrors | null => {
  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value)
    return { misMatch: true }

    return null;
}
```

