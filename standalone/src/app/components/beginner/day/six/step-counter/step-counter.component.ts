import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-counter',
  standalone: true,
  imports: [],
  templateUrl: './step-counter.component.html',
  styleUrl: './step-counter.component.scss'
})
export class StepCounterComponent {
  count = 0;
  @Input({ required: true}) step = 1;
  onIncrement() {
    this.count += this.step;
  }
}
