import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeName'
})
export class CapitalizeNamePipe implements PipeTransform {

    transform(value: string): string {
      return value ? value[0].toUpperCase() + value.slice(1).toLowerCase() : '';
    }
}
