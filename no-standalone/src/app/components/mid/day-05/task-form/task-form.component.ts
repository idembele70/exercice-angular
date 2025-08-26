import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';

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
      title: ['', Validators.minLength(3)],
    });
    this.tasks.push(task);
  }

  isInvalid(task: AbstractControl): boolean {
    const title = task.get('title');
    return !!(title?.invalid && title?.touched);
  }
}
