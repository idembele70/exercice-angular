import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective {

  constructor(private el: ElementRef) { }
  
  ngAfterViewInit() {
    this.el.nativeElement.focus()
  }

}
