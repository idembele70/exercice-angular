import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-username-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './username-form.component.html',
  styleUrl: './username-form.component.scss'
})
export class UsernameFormComponent {
  private readonly fb = inject(FormBuilder);
  readonly form = this.fb.nonNullable.group({
    username: this.fb.control('', { validators: [Validators.required] })
  });

  onSubmit = () => {
    if(this.form.valid) {
      console.log(this.form.value);
      this.form.reset()
    }
  }
}
