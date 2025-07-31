import { Component, Input } from '@angular/core';
import { User } from '../../../../models/day/two/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: User = {
    name: '',
    email: ''
  }
}
