import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../../../services/mid/day-02/auth/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
    if(authService.isLoggedIn() === false || authService.isAdmin === false) {
      router.navigate(['/']);
      return false;
    }
  return true;
};
