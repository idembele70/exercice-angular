====
QCM
====
1. A
2. A
3. A, 
4. B
5. A

=====
CODE
=====
6. ```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <label for="firstname">FirstName:</label><br>
  <input type="text" name="firstname" id="firstname" autocomplete="given-name" formControlName="firstName"><br>
  <span *ngIf="isInValid('firstName')">Firstname should contain at least 2 characters</span><br>
  <label for="lastname">LastName:</label><br>
  <input type="text" name="lastname" id="lastname" autocomplete="family-name" formControlName="lastName"><br>
  <span *ngIf="isInValid('lastName')">Lastname should contain at least 2 characters</span><br>
  <label for="email">Email:</label><br>
  <input type="email" name="email" id="email" autocomplete="email" formControlName="email"><br>
  <span *ngIf="isInValid('email')">Enter a valid email please</span><br>
  <label for="password">Password:</label><br>
  <input type="password" name="password" id="password" autocomplete="current-password" formControlName="password"><br>
  <span *ngIf="isInValid('password')">Password should contain at least 6 characters</span><br>
  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>
<pre>
{{ myFormValue$ | async }}
</pre>
```
```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  readonly myFormValue$ = new BehaviorSubject<string>('');
  constructor(private readonly fb: FormBuilder) { };

  readonly myForm = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', Validators.email],
    password: ['', Validators.minLength(6)],
  });

  
  isInValid(name: string) {
   const control = this.myForm.get(name);
   return control?.invalid && control?.touched
  }

  onSubmit() {
    const stringify = JSON.stringify(this.myForm.value, null, 2);
    this.myFormValue$.next(stringify);
    this.myForm.reset();
  }
}
```
7. ```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../../../models/mid/day-05/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products$ = new BehaviorSubject<Product[]>([
  {
    id: 1,
    name: 'body cream',
  },
  {
    id: 2,
    name: 'face cream',
  },
  ]);

  addProduct(product: Product) {
    const products = this.products$.value;
    this.products$.next([...products, product]);
  }

  removeProduct(id: number) {
    const products = this.products$.value;
    const filtered = products.filter(p => p.id !== id);
    this.products$.next(filtered);
  }

  getProducts$(): Observable<Product[]> {
    return this.products$.asObservable();
  }
}
```
8. ```ts
import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  @Input({ required: true }) appHoverColor: string = '';
  constructor(private readonly el: ElementRef, private readonly renderer2: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.setStyle(this.el.nativeElement, 'color', this.appHoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer2.removeStyle(this.el.nativeElement, 'color');
  }
}
9. ```html
<form [formGroup]="taskForm">
  <div formArrayName="tasks">
    <div *ngFor="let task of tasks.controls; let $index=index" [formGroupName]="$index">
      <input type="text" name="task" id="task" formControlName="task">
      <button type="reset" (click)=(onRemoveTask($index))>Remove task</button>
    </div>
  </div>
</form>
<button type="button" (click)="onAddTask()">Add task</button>
```
```ts
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  constructor(private readonly fb: FormBuilder) { };

  readonly taskForm = this.fb.nonNullable.group({
    tasks: this.fb.array([]),
  });

  get tasks() {
    return this.taskForm.get('tasks') as FormArray;
  }

  onRemoveTask(index: number) {
    this.tasks.removeAt(index);
  }

  onAddTask() {
    const task = this.fb.nonNullable.group({
      task: ['', Validators.minLength(3)],
    });
    this.tasks.push(task);
  }
}
```
10. ```ts
import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../../models/mid/day-05/user';

@Pipe({
  name: 'filterByAge',
  pure: true
})
export class FilterByAgePipe implements PipeTransform {

  transform(users: User[], minAge: number): User[] {
    if (!users?.length) return []
    if (!minAge || minAge < 0) return users;

    const filtered = users.filter(u => u.age > minAge);
    return filtered;
  }
}
```
