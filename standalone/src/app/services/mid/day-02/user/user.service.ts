import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../../../../models/mid/day-02/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userList$ = new BehaviorSubject<User[]>([
  {
    id: '4545',
    firstname: 'john',
    lastname: 'doe',
    age: 25,
    role: 'admin',
  },
  {
    id: '5487',
    firstname: 'jane',
    lastname: 'lane',
    age: 50,
    role: 'client',
  },
  ]);
  
  addUser (user: User) {
    const users = this.userList$.value;
    this.userList$.next([...users, user]);
  }

  getUsers$ () {
    return this.userList$.asObservable();
  }

  getOneUser$ (id: string) {
    return this.userList$.pipe(
      map(users => users.find(user => user.id === id))
    )
  }
}
