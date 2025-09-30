import { ValidatorFn, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = function(group: AbstractControl<FormGroup>): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;

  return password && confirmPassword && (password !== confirmPassword) ? { misMatchPassword: true } : null;
}
