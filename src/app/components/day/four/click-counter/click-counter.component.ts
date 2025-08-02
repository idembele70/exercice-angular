import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  standalone: true,
  imports: [],
  templateUrl: './click-counter.component.html',
  styleUrl: './click-counter.component.scss'
})
export class ClickCounterComponent {
  count: number = 0;
  onIncrement() {
    this.count += 1;
  }
}
