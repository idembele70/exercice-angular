import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(str: string | null | undefined, limit:number): string {
  if (!str) return '';
  if (limit <= 0 || limit >= str.length)
      return str
    return str.substring(0, limit) + '...';
  }
}
