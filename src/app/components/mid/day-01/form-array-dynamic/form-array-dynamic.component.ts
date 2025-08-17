import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array-dynamic',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './form-array-dynamic.component.html',
  styleUrl: './form-array-dynamic.component.scss'
})
export class FormArrayDynamicComponent {
  constructor(private readonly fb: FormBuilder) { };

  evForm = this.fb.nonNullable.group({
    inputFields: this.fb.array<FormGroup<{ email: FormControl<string>}>>([]),
  });

  get inputFields() {
    return this.evForm.get('inputFields') as FormArray;
  }

  addInputField() {
    const inputFieldForm = this.fb.group({
      email: ['', Validators.email, Validators.required],
    });

    this.inputFields.push(inputFieldForm);
  }

  onSubmit() {
    if (this.evForm.valid)
      console.log(this.evForm.value);
  }
}
