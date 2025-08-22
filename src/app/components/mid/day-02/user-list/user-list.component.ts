import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserService } from '../../../../services/mid/day-02/user/user.service';
import { User } from '../../../../models/mid/day-02/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  readonly userList$ = this.userService.getUsers$();
  constructor(private readonly userService: UserService) { }

  trackById = (_: number, user: User) => user.id;
}
