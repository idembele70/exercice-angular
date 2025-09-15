import { Pipe, PipeTransform, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Pipe({
  name: 'betterAsync',
  pure: true,
})
export class BetterAsyncPipe implements PipeTransform {
  constructor(private readonly asyncPipe: AsyncPipe) {}

  transform = (value$: Observable<string>): string  => {
    return this.asyncPipe.transform(value$) || 'loading...';
  }
}
