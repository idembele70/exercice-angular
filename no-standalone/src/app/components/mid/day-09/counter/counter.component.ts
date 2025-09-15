import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly count$ = new BehaviorSubject(0);
  private readonly step = 1;
  private readonly maxValue = 10;

  onIncrement() {
    if (this.isMaxCountReached) return;
    const next = this.count + this.step;
    this.count$.next(next);
  }

  onDecrement() {
    this.count$.next(this.count - this.step); 
  }

  private get count() {
    return this.count$.value;
  }

  get isMaxCountReached() {
    return this.count >= this.maxValue;
  }
}
