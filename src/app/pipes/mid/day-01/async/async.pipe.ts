import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../../../../models/mid/day-01/article';

@Pipe({
  name: 'async',
  standalone: true
})
export class AsyncPipe implements PipeTransform {
  private latestValue: unknown;
  
  transform<T>(value$: Observable<T>): T | null {
    return value$.subscribe(val => {
      this.latestValue = val;
    });
    return this.latestValue as T ?? null;
  }

}
