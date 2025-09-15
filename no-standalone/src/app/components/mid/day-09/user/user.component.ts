import { Component, inject, Input, OnChanges } from '@angular/core';

import { UserService } from '../../../../services/mid/day-09/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges {
  private readonly userService = inject(UserService);
  @Input() username: string = '';
  @Input() id: number = 0;

  ngOnChanges() {
    console.log('Change detected');
  }

  onShuffle(id: number) {
    this.userService.shuffle(id);
  }
}
