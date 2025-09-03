import { OnChanges, Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective implements OnChanges {
  @Input({ required: true }) appLoading = false;
  constructor(private readonly element: ElementRef, private readonly renderer2: Renderer2) { }

  ngOnChanges() {
    if (this.appLoading && this.element)
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'block');
    else
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
  }

  /*
  constructor(private readonly element: ElementRef, private readonly renderer: Renderer2) {}

  @Input('appLoading') set loading(isLoading: boolean) {
    if (isLoading)
      this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
    else
      this.renderer.removeStyle(this.element.nativeElement, 'display');
  }
  */

}
