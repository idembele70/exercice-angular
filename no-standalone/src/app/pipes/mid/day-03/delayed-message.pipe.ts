import { Pipe, PipeTransform } from '@angular/core';
import { of, Observable, delay } from 'rxjs';

@Pipe({
  name: 'delayedMessage'
})
export class DelayedMessagePipe implements PipeTransform {

  transform(value: string): Observable<string> {
    const DELAY = 2_000;
      return of(value).pipe(delay(DELAY));
    }
}
