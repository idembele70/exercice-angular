import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from "@angular/common";
import { User } from '../../../../../models/beginner/day/ten/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() users: User[] = [];
}
