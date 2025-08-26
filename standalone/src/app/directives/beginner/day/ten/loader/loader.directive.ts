import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appLoader]',
  standalone: true
})
export class LoaderDirective {
  @Input('appLoader') isLoading = false;

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { }

  ngOnChanges() {
      this.renderer.setProperty(this.el.nativeElement, 'textContent', this.isLoading ? '<h1>Loading...</h1>': '<h1>Hello World!</h1>');
   }
}
