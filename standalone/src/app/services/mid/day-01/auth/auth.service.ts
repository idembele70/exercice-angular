import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly isLoggedIn$ = new BehaviorSubject<boolean>(true);

  constructor() { }
}
