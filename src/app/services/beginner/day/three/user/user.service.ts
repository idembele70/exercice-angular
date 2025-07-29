import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../../../../models/day/two/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly #Users = new BehaviorSubject<User[]>([
    {
      name: 'toto',
      email: 'toto@email.fr',
    },
    {
      name: 'titi',
      email: 'titi@email.fr',
    }
  ])
  constructor() { }

  getUser(index: number) {
    return this.#Users.pipe(
      map((users) => users[index]
    ));
  }
}
