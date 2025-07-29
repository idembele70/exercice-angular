import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(str: string): string {
    if(!str) return '';
    const [firstLetter, ...rest] = str
    return firstLetter.toUpperCase() + rest.join('');
  }

}
