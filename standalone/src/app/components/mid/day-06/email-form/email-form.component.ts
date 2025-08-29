import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgIf],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  data = '';
  readonly emailForm = this.fb.nonNullable.group(
  {
    username: ['', Validators.required],
    emails: this.fb.array([]),
  },
  {
    updateOn: 'blur',
  }
  );

  private createEmailControl() {
  return this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });
  }
  
  constructor(private readonly fb: FormBuilder) { }

  get username() {
    return this.emailForm.get('username');
  }

  get emails() {
    return this.emailForm.get('emails') as FormArray;
  }

  isInvalid(index: number) {
    const control = this.emails.at(index).get('email');
    return control?.touched && control?.invalid;
  }

  onAddEmail() {
    this.emails.push(this.createEmailControl());
  }

  onRemoveEmail(index: number) {
    this.emails.removeAt(index);
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.data = JSON.stringify(this.emailForm.getRawValue(), null, 2);
      this.emailForm.reset({
        username: '',
        emails: [this.createEmailControl()],
      });
    }
  }
}
