import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverClass]'
})
export class HoverClassDirective {
  @Input({ required: true, alias: 'appHoverClass' }) hoverClass!: string;
  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.hoverClass);
  }

}
