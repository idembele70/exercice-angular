import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn() {
    return true
  }

  token() {
    return 'x-token-xdjfue-1254';
  }
  constructor() { }
}
