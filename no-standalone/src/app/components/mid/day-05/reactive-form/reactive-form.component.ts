import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  readonly myFormValue$ = new BehaviorSubject<string>('');
  constructor(private readonly fb: FormBuilder) { };

  readonly myForm = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', Validators.email],
    password: ['', Validators.minLength(6)],
  });

  
  isInValid(name: string): boolean {
   const control = this.myForm.get(name);
   return !!(control?.invalid && control?.touched);
  }

  onSubmit() {
    const stringify = JSON.stringify(this.myForm.value, null, 2);
    this.myFormValue$.next(stringify);
    this.myForm.reset();
  }
}
