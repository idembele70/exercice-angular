import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private readonly errorMessage$ = new BehaviorSubject<string>('');

  getMessage$(): Observable<string> {
    return this.errorMessage$.asObservable()
  }

  setMessage(message: string) {
    this.errorMessage$.next(message);
  }
}
