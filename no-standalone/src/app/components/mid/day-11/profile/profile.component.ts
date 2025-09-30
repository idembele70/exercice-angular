import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { User } from '../../../../models/mid/day-11/user.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  private readonly route = inject(ActivatedRoute);
  readonly user$ = this.route.data.pipe(map(data => data['user'] as User));
}
