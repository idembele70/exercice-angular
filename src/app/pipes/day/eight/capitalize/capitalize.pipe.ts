import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(str: string): string {
    return str.replaceAll(/^[a-z]|[A-Z]/g, x => {
      if(x.toLowerCase() === x)
        return x.toUpperCase();
      return ` ${x}`
    });
  }

}
