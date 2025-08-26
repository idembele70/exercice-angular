import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  onSubmit() {
    console.log(this.form.value.email);
    this.form.reset();
  }
}
