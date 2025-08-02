import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../../../../services/day/four/timer/timer.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy {
  private readonly timerService = inject(TimerService);
  time = this.timerService.getTimer$();

  ngOnInit(): void {
    const COUNT = 1;
    this.timerService.startTimer(COUNT);
  }

  ngOnDestroy(): void {
    this.timerService.stopTimer();
  }
}
