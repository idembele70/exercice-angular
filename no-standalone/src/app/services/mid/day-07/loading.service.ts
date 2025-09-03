import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly isLoading$ = new BehaviorSubject<boolean>(false);

  getState$(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  setState(state: boolean) {
    this.isLoading$.next(state);
  }
}
