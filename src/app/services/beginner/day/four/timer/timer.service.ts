import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private readonly timer$ = new BehaviorSubject<number>(0);
  private interval: ReturnType<typeof setInterval> | null = null;

  getTimer$() {
    return this.timer$.asObservable();
  }

  startTimer(count: number) {
    const DELAY = 1000;
    this.interval = setInterval(() => {
      this.increment(count);
    }, DELAY);
  }

  stopTimer() {
    if (this.interval)
      clearInterval(this.interval);
  }

  increment(count: number) {
    const currentCount = this.timer$.value;
    this.timer$.next(currentCount + count);
  }
}
