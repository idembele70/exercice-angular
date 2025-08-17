====
QCM
====

1. A
2. C
3. B
4. A
5. B

=====
CODE
=====
6.
html```
<form [formGroup]="evForm" (ngSubmit)="onSubmit()">
  <div formArrayName="inputFields">
    <div *ngFor="let field of inputFields.controls; let i = index;">
      <div [formGroupName]="i">
        <label for="email">Veuillez Saisir votre email:&nbsp;</label>
        <input type="text" name="email" id="email" autoComplete="email" formControlName="email" />
      </div>
    </div>
  </div>

  <button type="button" (click)="addInputField()">Ajouter un champ</button>
  <button type="submit">Enregistrer</button>
</form>
```
ts```
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-dynamic',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './form-array-dynamic.component.html',
  styleUrl: './form-array-dynamic.component.scss'
})
export class FormArrayDynamicComponent {
  constructor(private readonly fb: FormBuilder) { };

  evForm = this.fb.nonNullable.group({
    inputFields: this.fb.array([]),
  });

  get inputFields() {
    return this.evForm.get('inputFields') as FormArray;
  }

  addInputField() {
    const inputFieldForm = this.fb.group({
      email: ['', Validators.required],
    });

    this.inputFields.push(inputFieldForm);
  }

  onSubmit() {
    if (this.evForm.valid)
      console.log(this.evForm.value);
  }
}
```
7. 
HTML```
<ul>
  <li *ngFor="let article of articles$ | async">
    <h1>Name: {{ article.name }} --- Price: {{ article.price }}</h1>
  </li>
</ul>
```
TS```
import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormArrayDynamicComponent } from '../mid/day-01/form-array-dynamic/form-array-dynamic.component';
import { AsyncPipe } from '../../pipes/mid/day-01/async/async.pipe';
import { ArticleService } from '../../services/mid/day-01/article/article.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [FormArrayDynamicComponent, NgFor, AsyncPipe],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
 private readonly articleService = inject(ArticleService);

  articles$ = this.articleService.getArticles$;

}
```
<!-- async.pipe -->
TS```
import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../../../../models/mid/day-01/article';

@Pipe({
  name: 'async',
  standalone: true
})
export class AsyncPipe implements PipeTransform {

  transform(value$: BehaviorSubject<Article[]>): Article[] {
    return value$.value
  }

}
```
<!-- article.service -->
TS```
import { Injectable } from '@angular/core';
import { Article } from '../../../../models/mid/day-01/article';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  readonly #articles$ = new BehaviorSubject<Article[]>([
  {
    name: 'shoes',
    price: 225
  },
  {
    name: 'jeans',
    price: 150,
  },
  ]);

  getArticles$(): BehaviorSubject<Article[]> {
    return this.#articles$
  }
}
```
<!-- article -->
TS```
export interface Article {
  name: string;
  price: number;
}
```
8.
<!-- auth.guard -->
ts```
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../../services/mid/day-01/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn$.value;
  if (!isLoggedIn) {
    router.navigate(['/login'])
    return false;
  }
  return true;
};
```
<!-- auth.service -->
ts```
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly isLoggedIn$ = new BehaviorSubject<boolean>(true);

  constructor() { }
}
```
<!-- app.routes -->
ts```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/beginner/day/three/register-form/register-form.component';
import { UserCardComponent } from './components/beginner/day/two/user-card/user-card.component';
import { CounterComponent } from './components/beginner/day/one/counter/counter.component';
import { UserListComponent } from './components/beginner/day/three/user-list/user-list.component';
import { userResolver } from './resolvers/beginner/day/three/user.resolver';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DashboardComponent } from './components/beginner/day/seven/dashboard/dashboard.component';
import { HomeComponent } from './components/mid/day-01/home/home.component';
import { LoginComponent } from './components/mid/day-01/login/login.component';
import { authGuard } from './guards/mid/day-01/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  }, 
  {
    path: 'register',
    component: RegisterFormComponent,
  }, 
  {
    path: 'user/:id',
    component: UserListComponent,
    resolve: {
      user: userResolver
    }
  },
  {
    path: '',
    component: MainViewComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
```
9.
ts```
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private readonly el: ElementRef, private readonly renderer2: Renderer2) { }
  @HostListener('mouseover') onMouseOver() {
    this.renderer2.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    this.renderer2.setStyle(this.el.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseout') onMouseOut() {
    this.renderer2.removeStyle(this.el.nativeElement, 'font-weight');
    this.renderer2.removeStyle(this.el.nativeElement, 'color');
  }
}
```
10.
<!-- capitalize.pipe -->
ts```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(str: string): string {
    if(str.length === 0)
      return '';
    return str.replaceAll(/\w\S*/g, (txt) => {
      return txt[0].toUpperCase() + txt.slice(1).toLowerCase()
    });
  }

}
```
<!-- capitalize.pipe.spec-->
ts```
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "hello world" to "Hello World"', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('hello world')).toBe('Hello World');
  })
});
```
