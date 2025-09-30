import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from '../../../services/mid/day-11/user.service';
import { User } from '../../../models/mid/day-11/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private readonly userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = Number(route.paramMap.get('id'));
    return this.userService.getOneUser$(id);
  }
}
