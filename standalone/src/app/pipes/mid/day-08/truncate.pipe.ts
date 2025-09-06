import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxLength = 20): string {
    if (!value) return '';
    if (value.length < maxLength || maxLength <= 0) return value;
    return value.slice(0, maxLength) + '...';
  }

}
