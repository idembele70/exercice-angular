import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subject, interval, take, BehaviorSubject, tap } from 'rxjs';

import { RoleService } from '../../services/mid/day-09/role.service';
import { UserService } from '../../services/mid/day-09/user.service';
import { User } from '../../models/mid/day-09/user';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})

export class MainViewComponent implements OnInit {
  constructor (private readonly userService: UserService) {}
  readonly users$ = this.userService.getUsers$();
  onLoadUsers() {
    this.userService.loadUsers();
  }

    trackById(index:number, user: User) {
    return user.id;
  }

  readonly str$ = new Subject();
  readonly #value$ = new BehaviorSubject('');
  private readonly roleService = inject(RoleService);
  readonly role$ = this.roleService.getRole$();


  
  onToggleRole() {
    const role = this.roleService.getRole();
    this.roleService.setRole(role === 'user' ? 'admin' : 'user');
  }

  get isAdmin () { return this.roleService.isAdmin(); }

  ngOnInit() {
    const delay = 2_500;
    interval(delay).pipe(
      take(1),
      tap(() => {
      })
    ).subscribe(() => this.str$.next(''));

    //
    interval(delay ).pipe(
      take(2),
      tap((v) => v === 0 ? this.#value$.next('') : this.#value$.next('Bye World'))
    ).subscribe()
  }

  get value$() {
    return this.#value$.asObservable();
  }

  onDebounceClick() {
    console.log('Emit');
  }
}
