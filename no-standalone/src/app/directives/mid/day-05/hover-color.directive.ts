import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  @Input({ required: true }) appHoverColor: string = '';
  constructor(private readonly el: ElementRef, private readonly renderer2: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.setStyle(this.el.nativeElement, 'color', this.appHoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer2.removeStyle(this.el.nativeElement, 'color');
  }
}
