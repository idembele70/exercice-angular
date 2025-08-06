import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CapitalizePipe } from '../../../../pipes/day/four/capitalize.pipe';
import { Field } from '../../../../models/day/eight/field';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, CapitalizePipe],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  readonly fields: Field[] = [
    {
      name: 'firstName',
      required: true,
    },
    {
      name: 'email',
      required: false,
    },
  ]
  private readonly fb = inject(FormBuilder);

  constructor() {
    console.log(this.fields.map(field =>
        this.fb.group({
          [field.name]: [
            '',
            field.required ? Validators.required : []
          ]
        })
      ))
  }

  readonly form = this.fb.nonNullable.group({
    fields: this.fb.array(
      this.fields.map(field =>
        this.fb.group({
          [field.name]: [
            '',
            field.required ? Validators.required : []
          ]
        })
      )
    )
  })

  onSubmit() {
    console.log(this.form.value)
  }
}
