import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { UserService } from '../../../../services/mid/day-11/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  readonly users$ = this.userService.fetchUsers$();
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly userService: UserService) { }
}
