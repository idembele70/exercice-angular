import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords',
  standalone: true
})
export class LimitWordsPipe implements PipeTransform {

  transform(value: string | null | undefined, limit: number): string {
    if (!value) return '';
    const words = value.trim().split(/\s+/);
    if (words.length <= limit) return value;
    return words.slice(0, limit).join(' ') + '...';
  }

}
