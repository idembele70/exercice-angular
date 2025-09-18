import { Directive, HostListener, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject, debounceTime, tap, takeUntil } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  private readonly _emitDelay$ = new Subject<void>();
  private readonly _destroy$ = new Subject<void>();
  readonly DUE_TIME = 500;

  @Output() debouncedClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this._emitDelay$
      .pipe(debounceTime(this.DUE_TIME), takeUntil(this._destroy$))
      .subscribe(() => this.debouncedClick.emit());
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  
  @HostListener('click') onClick() {
    this._emitDelay$.next()
  }
}
