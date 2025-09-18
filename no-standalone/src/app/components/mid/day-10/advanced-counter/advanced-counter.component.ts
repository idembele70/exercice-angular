import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-advanced-counter',
  templateUrl: './advanced-counter.component.html',
  styleUrl: './advanced-counter.component.scss'
})
export class AdvancedCounterComponent {
  readonly MAX_COUNT = 20;
  readonly MIN_COUNT = 0;
  readonly STEP = 1;

  readonly count$ = new BehaviorSubject<number>(0);

  onIncrement() {
    if (this.isMax) return;
    const next = this._count + this.STEP;
    this.count$.next(next);
  }

  onDecrement() {
    if (this.isMin) return;
    const next = this._count - this.STEP;
    this.count$.next(next);
  }

  private get _count() {
    return this.count$.value;
  }

  get isMax() {
    return this._count >= this.MAX_COUNT;
  }

  get isMin() {
    return this._count <= this.MIN_COUNT;
  }
}
