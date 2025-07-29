import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    age: [18, [Validators.required, Validators.min(1)]]
  });

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
    console.log(this.form.value);
    
  }
}
