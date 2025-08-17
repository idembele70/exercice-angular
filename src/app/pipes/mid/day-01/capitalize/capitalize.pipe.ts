import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(str: string): string {
    if(!str)
      return '';
    return str.replaceAll(/\w\S*/g, (txt) => {
      return txt[0].toUpperCase() + txt.slice(1).toLowerCase()
    });
  }

}
