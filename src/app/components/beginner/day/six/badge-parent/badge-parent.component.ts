import { Component } from '@angular/core';
import { BadgeChildComponent } from "../badge-child/badge-child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-badge-parent',
  standalone: true,
  imports: [BadgeChildComponent, FormsModule],
  templateUrl: './badge-parent.component.html',
  styleUrl: './badge-parent.component.scss'
})
export class BadgeParentComponent {
  username = '';
}
