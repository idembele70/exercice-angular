import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly count$ = new BehaviorSubject(0);
  private readonly step = 1;

  onIncrement() {
    this.count$.next(this.count + this.step);
  }

  onDecrement() {
    if (this.cannotDecrement) return;

    this.count$.next(this.count - this.step);
  }

  get cannotDecrement() {
    return this.count === 0
  }

  private get count() {
    return this.count$.value;
  }
}
