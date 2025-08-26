import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input({ required: true }) appHighlight: string = '';

  constructor(private readonly el: ElementRef, private readonly renderer2: Renderer2) { }

  ngOnChanges() {
    this.renderer2.setStyle(this.el.nativeElement, 'color', this.appHighlight);
  }

}
