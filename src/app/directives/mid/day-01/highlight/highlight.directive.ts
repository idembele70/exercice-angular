import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: string = 'red';
  constructor(private readonly el: ElementRef, private readonly renderer2: Renderer2) { }
  @HostListener('mouseover') onMouseOver() {
    this.renderer2.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    this.renderer2.setStyle(this.el.nativeElement, 'color', this.appHighlight);
  }
  @HostListener('mouseout') onMouseOut() {
    this.renderer2.removeStyle(this.el.nativeElement, 'font-weight');
    this.renderer2.removeStyle(this.el.nativeElement, 'color');
  }
}
