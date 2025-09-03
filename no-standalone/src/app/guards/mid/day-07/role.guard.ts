import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../../../services/mid/day-07/user.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.isLoggedIn() || !userService.isAdmin()) {
    router.navigate(['/unauthorized']);
    return false
  }
  return true;
};
