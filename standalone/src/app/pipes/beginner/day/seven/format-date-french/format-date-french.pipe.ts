import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateFrench',
  standalone: true
})
export class FormatDateFrenchPipe implements PipeTransform {
  transform(value: Date): string {
   if(!(value instanceof Date)) return value;
   return value.toLocaleDateString('fr-FR');
  }
}
