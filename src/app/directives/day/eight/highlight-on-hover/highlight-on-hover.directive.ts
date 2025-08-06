import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]',
  standalone: true,
})
export class HighlightOnHoverDirective {

  @HostBinding('style.background-color') bgColor: 'yellow' | 'transparent' = 'transparent';
  @HostListener('mouseover')
  onMouseOver() {
    this.bgColor = 'yellow';
  }
  
  @HostListener('mouseout')
  onMouseOut() {
    this.bgColor = 'transparent';
  }

}
