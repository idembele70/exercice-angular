import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval , Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  private readonly interval$ = interval(1000);
  private readonly destroy$ = new Subject<void>();

  ngOnInit() {
    console.log('Init');
    this.interval$
      .pipe(takeUntil(this.destroy$))
      .subscribe(console.log);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
