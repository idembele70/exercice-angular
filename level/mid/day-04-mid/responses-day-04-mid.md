====
QCM
====
1. D
2. A
3. D
4. D
5. A, B
=====
CODE
=====
6. ```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { User } from '../../../models/mid/day-04/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';
  private readonly http = inject(HttpClient);

  getUsers$(): Observable<User[]> {
  const urlHref = new URL('users', this.baseUrl).href;
    return this.http.get<User[]>(urlHref).pipe(
      catchError((err) => {
        throw err;
      })
    )
  }
}
```
7. ```ts
// auth.guard
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../services/mid/day-04/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {

    router.navigate(['login']);
    return false;
  }

  return true;
};
// auth.service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'day-04-auth';
  private isLogged = this.loadFromStorage();

  isLoggedIn() {

    return this.isLogged;
  }

  login() {
    this.isLogged = true;
    this.setStorage(true)  
  }

  logout() {
    this.isLogged = false;
    this.setStorage(false);
  }

  private loadFromStorage() {
    const stored = sessionStorage.getItem(this.storageKey);
    
      return stored ? JSON.parse(stored) : false
  }

  private setStorage(value: boolean) {
    sessionStorage.setItem(this.storageKey, JSON.stringify(value));
  }
}
```
8. ```ts
import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input({ required: true }) appHighlight: string = '';

  constructor(private readonly el: ElementRef, private readonly renderer2: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer2.setStyle(this.el.nativeElement, 'color', this.appHighlight);
  }

}
```
9. ```
// ts
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  constructor(private readonly fb: FormBuilder) { }

  readonly form = this.fb.nonNullable.group({
    tasks: this.fb.array([]),
  });

  get tasks() {
    return this.form.get('tasks') as FormArray;
  }

  addTasks() {
    const taskForm = this.fb.nonNullable.group({
      task: ['', Validators.minLength(3)]
    });
    this.tasks.push(taskForm);
    console.log(this.tasks.controls)
  }
}
// HTML
<h1>TodoFormComponent</h1>
<form [formGroup]="form">
  <div formArrayName="tasks">
    <div *ngFor="let task of tasks.controls; let i = index" [formGroupName]="i">
      <input type="text" name="task" id="task" placeholder="Enter your task" formControlName="task"><br>
      <span *ngIf="task.touched && task.invalid">Your task is to short, a minimum of 3 characters is required</span>
    </div><br>
  </div>
</form>
<button type="button" (click)="addTasks()">Add a task</button>
```
10. ```ts
import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../../models/mid/day-04/user';

@Pipe({
  name: 'customFilter',
  pure: true
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: string, users: User[]): User[] {
    if (!value)
      return users
    if (!users.length)
      return []
    const filtered = users.filter(
      user => {
      const condition = `${user.id.toString()} ${user.name.toLowerCase()}`.includes(value.toLowerCase())
      return condition
      }
    )
    return filtered;
  }

}

```
