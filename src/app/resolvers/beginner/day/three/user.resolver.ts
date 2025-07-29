import { ResolveFn } from '@angular/router';
import { UserService } from '../../../services/day/three/user/user.service';
import { inject } from '@angular/core';
import { User } from '../../../models/day/two/user';
import { Observable } from 'rxjs';

export const userResolver: ResolveFn<User> = (route, state): Observable<User> => {
  const userService = inject(UserService);
  return userService.getUser(+route.params['id']);
};
