import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective {

  constructor(private readonly el: ElementRef<HTMLInputElement>, @Inject(PLATFORM_ID) private readonly platformId: Object) { }
  
  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId))
    this.el.nativeElement.focus();
  }
}
