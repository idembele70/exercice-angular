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
  }
}
