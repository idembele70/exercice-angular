import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDebounceClick]',
  standalone: true
})
export class DebounceClickDirective {
    debounceTime = 1000;
    isDisabled = false;

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { };
  @HostListener('click') onClick() {
    if (this.isDisabled) return;
    this.isDisabled = true;
    this.renderer.setProperty(this.el.nativeElement, 'disabled', true);

    setTimeout(() => {
      this.isDisabled = false;
      this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
    }, this.debounceTime);
  }
}
