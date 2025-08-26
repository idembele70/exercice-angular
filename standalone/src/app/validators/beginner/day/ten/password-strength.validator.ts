import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const value = control.value;

      if (!value)
        return null;

      const hasEightChar = value.length > 7;

      const hasUppercaseChar = /[A-Z]/.test(value);

      const hasDigit = /\d/.test(value);

      const hasSpecialChar = /\W/.test(value);

      const isPasswordStrong  = hasEightChar && hasUppercaseChar && hasDigit && hasSpecialChar;

      return isPasswordStrong ? null : { weakPassword: true };
    }
}
