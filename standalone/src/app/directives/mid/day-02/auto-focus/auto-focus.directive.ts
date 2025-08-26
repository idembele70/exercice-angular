import { Directive, ElementRef, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private readonly el: ElementRef) { }

  ngAfterViewInit() {
    if (typeof this.el.nativeElement === 'function')
      this.el.nativeElement.focus();
  }

}
