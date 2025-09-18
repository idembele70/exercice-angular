====
QCM
====
1. B
2. A, B, C, D
3. A, C
4. A,
5. B, 
=====
CODE
=====
6. ```html
<h1>{{ count$ | async }}</h1>
<div>
  <button type="button" (click)="onIncrement()" [disabled]="isMax">Increment</button>
  <button type="button" (click)="onDecrement()" [disabled]="isMin">Decrement</button>
</div>
```
```ts
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-advanced-counter',
  templateUrl: './advanced-counter.component.html',
  styleUrl: './advanced-counter.component.scss'
})
export class AdvancedCounterComponent {
  readonly count$ = new BehaviorSubject<number>(0);
  private readonly _maxCount = 20;
  private readonly _minCount = 0;
  private readonly _step = 1;

  onIncrement() {
    if (this.isMax) return;
    const next = this._count + this._step;
    this.count$.next(next);
  }

  onDecrement() {
    if (this.isMin) return;
    const next = this._count - this._step;
    this.count$.next(next);
  }

  private get _count() {
    return this.count$.value;
  }

  get isMax() {
    return this._count >= this._maxCount;
  }

  get isMin() {
    return this._count <= this._minCount;
  }
}
```
7. ```ts
import { Directive, HostListener, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject, debounceTime, tap, takeUntil } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
  outputs: ['emitClickEv'],
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  private readonly _emitDelay$ = new Subject<void>();
  private readonly _dueTime = 500;
  private readonly _destroy$ = new Subject<void>();
  @Output() emitClickEv = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this._emitDelay$
    .pipe(
      debounceTime(this._dueTime),
      takeUntil(this._destroy$))
    .subscribe(() => {
      this.emitClickEv.emit()
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  
  @HostListener('click') onClick() {
    this._emitDelay$.next()
  }
}
```
8. ```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitilizeWords'
})
export class CapitilizeWordsPipe implements PipeTransform {

  transform(sentence: string): string {
    if (!sentence) return '';
    //return sentence.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
    return sentence.replaceAll(/\w+\b/g, m => m[0].toUpperCase() + m.slice(1).toLowerCase())
  }

}
```
9.  ```html
<!--todo-list.component.html-->
<form [formGroup]="todoForm" (ngSubmit)="onSubmit()">
  <input type="text" autocomplete="off" name="title" placeholder="Enter a todo title" formControlName="title">
  <button type="submit" [disabled]="notValid">Add</button><br> 
  <span *ngIf="title?.hasError('titleExists')">An todo with this title already exists</span>
</form>
<ul>
  <app-todo-row *ngFor="let todo of (todos$ | async) trackBy: trackById" [todo]="todo"></app-todo-row>
</ul>
<!-- todo-row.component.html-->
<li>
  <h1>{{todo.title}}</h1>
  <h2>{{todo.done ? 'Done' : 'Undone'}}</h2>
  <button type="button" (click)="onToggleTodo()">{{todo.done ? 'Uncomplete' : 'Complete'}} todo</button>
</li>
```
```ts
// todo-row.component
import { ChangeDetectionStrategy, Component, Input,} from '@angular/core';

import { Todo } from '../../../../models/mid/day-10/todo';
import { TodoService } from '../../../../services/mid/day-10/todo.service';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrl: './todo-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoRowComponent {
  @Input({ required: true }) todo: Todo = {
    id: 0,
    title: '',
    done: false,
  };

  constructor(private readonly todoService: TodoService) {};


  onToggleTodo() {
    this.todoService.toggleTodo(this.todo.id)
  }
}
// todo-list.component
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TodoService } from '../../../../services/mid/day-10/todo.service';
import { Todo } from '../../../../models/mid/day-10/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  readonly todos$ = this.todoService.getTodos$();

  readonly todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required, this.todoService.checkTitleExistAsync()]
  })
  
  constructor(private readonly todoService: TodoService, private readonly fb: FormBuilder) {}

  trackById(_:number, todo: Todo) {
    return todo.id;
  }

  get title() { return this.todoForm.get('title'); }

  get notValid() { return this.todoForm.invalid || this.todoForm.pending }
  
  onSubmit() {
    if (this.notValid) return;
    this.todoService.addTodo(this.title!.value)
    this.todoForm.reset();
  }

}
// todo
export interface Todo {
  id: number;
  title: string;
  done: boolean;
}
// todo.service
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { BehaviorSubject, Observable, of, timer, switchMap, map } from 'rxjs';

import { Todo } from '../../../models/mid/day-10/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly _todos$ = new BehaviorSubject<Todo[]>([
  {
    id: 0,
    title: 'First todo',
    done: false,
  },
  ]);
  private readonly _dueTime = 500;

  addTodo(title: string) {
    const todo: Todo = {
        id: this._todos.length,
        title: title,
        done: false,
    }
    this._todos$.next([...this._todos, todo]);
  }

  toggleTodo(id: number) {
    const updatedTodos = this._todos.map(t => t.id === id ? { ...t, done: !t.done } : t);
    this._todos$.next(updatedTodos);
  }

  getTodos$(): Observable<Todo[]> {
    return this._todos$.asObservable();
  }

  titleExist(title: string) {
    const index = this._todos.findIndex(t => t.title.toLowerCase() === title.toLowerCase())
    return of(index !== -1);
  }

  checkTitleExistAsync(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ titleExists: boolean } | null> => {
      if (!control.value)
        return of(null);
      return timer(this._dueTime).pipe(
        switchMap(() => this.titleExist(control.value)),
        map((exists) => exists ? { titleExists: true } : null)
      )
    }
  }

  private get _todos() { return this._todos$.value }
}
```
10. ```html
<!--register-form.component.html-->
<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  <div>
    <input type="text" placeholder="Enter your email" autocomplete="email" name="email" formControlName="email"><br>
    <span *ngIf="email?.dirty && email?.hasError('email')">Please provide a valid email</span>
    <span *ngIf="email?.hasError('emailExists')">This email is already taken</span>
  </div>
  <div>
    <input type="password" placeholder="Enter your password" autocomplete="new-password" name="password" formControlName="password"><br>
    <span *ngIf="password?.dirty && password?.hasError('minlength')">The password minimum length is 8</span>
  </div>
  <div>
    <input type="password" placeholder="Enter your password confirmation" autocomplete="off" name="confirm-password" formControlName="confirmPassword"><br>
    <span *ngIf="confirmPassword?.dirty && confirmPassword?.hasError('minlength')">The password minimum length is 8</span>
  </div>
  <span *ngIf="isPasswordMisMatch">Your password & confirm password fields values doesn't match</span><br><br>
  <input type="submit" [disabled]="isFormInvalidOrPending">
</form>
<pre>{{ data$ | async }}</pre>
```
```ts
// user.service
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { BehaviorSubject, timer, switchMap, map, of, Observable } from 'rxjs';

import { User } from '../../../models/mid/day-10/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users$ = new BehaviorSubject<User[]>([]);
  private readonly _dueTime = 500;

  emailExists(email: string) {
    const index = this._users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    return of(index !== -1);
  }

  isEmailTaken(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ emailExists: boolean} | null> => {
      if (!control.value)
        return of(null);

      return timer(this._dueTime)
        .pipe(
          switchMap(() => this.emailExists(control.value)),
          map(exists => exists ? { emailExists: true } : null)
        );
    }
  }

  addUser(email: string, password: string) {
    const user = {
      id: Math.random().toString(16).slice(2),
      email,
      password,
    }
    this._users$.next([...this._users, user]);
  }

  private get _users() {
    return this._users$.value;
  }
}
// user
export interface User {
  readonly id: string;
  email: string;
  password: string;
}
// password-match.validator
import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null=> {
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');

  if (!password || !confirmPassword) return null;
  
  return password.value === confirmPassword.value ? null : { passwordMisMatch: true };
}

//register-form.component
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { UserService } from '../../../../services/mid/day-10/user.service';
import { passwordMatchValidator } from '../../../../validators/mid/day-10/password-match.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  readonly data$ = new BehaviorSubject('')
  private readonly _passwordMinLength = 8;
  constructor(private readonly fb: FormBuilder, private readonly userService: UserService) {}

  readonly registerForm = this.fb.nonNullable.group(
  {
    email: ['', [Validators.required, Validators.email], this.userService.isEmailTaken()],
    password: ['', [Validators.required, Validators.minLength(this._passwordMinLength)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(this._passwordMinLength)]],
  },
  {
    updateOn: 'blur',
    validators: [passwordMatchValidator],
  }
  );

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get isFormInvalidOrPending() {
    return this.registerForm.invalid || this.registerForm.pending
  }

  get isPasswordMisMatch() {
    return (
      this.password?.valid &&
      this.confirmPassword?.valid &&
      !this.password?.hasError('minlength') &&
      !this.confirmPassword?.hasError('minlength') &&
      this.registerForm.hasError('passwordMisMatch')
      );
  }

  onSubmit() {
    if (this.isFormInvalidOrPending || !this.email || !this.password) return;

    this.userService.addUser(this.email.value, this.password.value);

    const rawValue = this.registerForm.getRawValue();
    this.data$.next(JSON.stringify(rawValue, null, 2));
    this.registerForm.reset();
  }
}
```
