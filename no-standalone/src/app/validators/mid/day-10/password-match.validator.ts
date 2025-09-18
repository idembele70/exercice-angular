import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null=> {
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');

  if (!password || !confirmPassword) return null;
  
  return password.value === confirmPassword.value ? null : { passwordMisMatch: true };
}
