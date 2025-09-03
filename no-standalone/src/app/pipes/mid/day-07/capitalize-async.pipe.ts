import { Pipe, PipeTransform } from '@angular/core';
import { of, map, Observable, catchError } from 'rxjs';

@Pipe({
  name: 'capitalizeAsync'
})
export class CapitalizeAsyncPipe implements PipeTransform {

  transform(value$: Observable<string>): Observable<string> {
    return value$.pipe(
      map(value => {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      })
    );
  }
}
