import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() color = '';
  private originalColor?: string;

  constructor(private element: ElementRef, private readonly renderer: Renderer2) { }

    @HostListener('mouseover') onMouseOver() {
      this.originalColor = this.element.nativeElement.style.color;
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    }

   @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.originalColor || null);
   }

}
