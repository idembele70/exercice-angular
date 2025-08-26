import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverClass]',
  standalone: true
})
export class HoverClassDirective {
  @Input({ required: true }) appHoverClass = ''

  constructor(
    private readonly el: ElementRef,
    private readonly renderer2: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.addClass(this.el.nativeElement, this.appHoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer2.removeClass(this.el.nativeElement, this.appHoverClass);
  }

}
