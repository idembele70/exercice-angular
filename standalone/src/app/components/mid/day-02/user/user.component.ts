import { Component, inject } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { UserService } from '../../../../services/mid/day-02/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';
import { User } from '../../../../models/mid/day-02/user'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  private readonly userService = inject(UserService);
  private route = inject(ActivatedRoute);

  readonly user$ = this.route.paramMap.pipe(
    map(params => params.get('id')!),
    switchMap(id => this.userService.getOneUser$(id))
  );
   
}
