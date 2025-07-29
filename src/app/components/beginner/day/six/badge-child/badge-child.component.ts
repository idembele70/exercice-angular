import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge-child',
  standalone: true,
  imports: [],
  templateUrl: './badge-child.component.html',
  styleUrl: './badge-child.component.scss'
})
export class BadgeChildComponent {
  username = input.required<string>();

  
  public get name() : string {
    return this.username() || 'anonymous';
  }
}
