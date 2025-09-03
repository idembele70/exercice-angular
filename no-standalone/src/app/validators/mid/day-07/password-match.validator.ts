import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms'
export const passwordMatchValidator: ValidatorFn  = (control: AbstractControl<FormGroup>): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value

   return password && confirmPassword && (password === confirmPassword) ? null : { passwordMisMatch: true };
}
