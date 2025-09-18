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
    this.todoForm.reset({}, { emitEvent: false });
  }

}
