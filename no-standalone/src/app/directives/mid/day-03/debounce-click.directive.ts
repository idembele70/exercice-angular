import { Directive, ElementRef, HostListener, OnDestroy, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnDestroy {
  private timeout: ReturnType<typeof setTimeout> | null = null;
  private readonly delay = 2500;
  private canEmit = true;

  @Output() debounceClick = new EventEmitter<Event>();

  @HostListener('click', ['$event']) onClick(event: Event) {
    if (!this.canEmit) return;

    this.debounceClick.emit(event);
    this.canEmit = false;

    this.timeout = setTimeout(() => {
      this.canEmit = true;
    }, this.delay);
  }

  ngOnDestroy() {
    if (this.timeout)
      clearTimeout(this.timeout);
  }
}
