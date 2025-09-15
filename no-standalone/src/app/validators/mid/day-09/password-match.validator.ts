import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (group: AbstractControl<FormGroup>): ValidationErrors | null => {
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');

  if (!password?.value || !confirmPassword?.value) return null;

  return password.value === confirmPassword.value ? null : { misMatch: true }

}
