import { Component } from '@angular/core';
import { TodoService } from '../../services/mid/day-03/todo.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  readonly todos$ = this.todoService.getTodos$();
  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
  });
  constructor(private readonly todoService: TodoService, private readonly fb: FormBuilder) {};

  trackTodo(index: any, todo: { id: number }) {
    return todo ? todo.id : undefined;
  }

  get name() {
    return this.form.get('name');
  }

  onAddTodo() {
    const title = this.name!.value.trim()
    this.todoService.addTodo(title);
    this.form.reset();
  }

  onToggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  onDebounceClick() {
    console.log('Clicked !');
  }

  
}
