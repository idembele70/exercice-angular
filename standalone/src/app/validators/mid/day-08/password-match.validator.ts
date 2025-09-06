import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const passwordMatch: ValidatorFn = (formGroup: AbstractControl<FormGroup>): ValidationErrors | null => {
  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value)
    return { misMatch: true }

    return null;
}
