import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(str: string, length: number): string {
    if(str.length > length)
      return str.substring(0, length) + '...';
    return str;
  }
}
