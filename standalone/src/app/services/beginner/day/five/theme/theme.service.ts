import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly theme$ = new BehaviorSubject<'light' | 'dark'>('light');
  
  getTheme$() {
    return this.theme$.asObservable();
  }

  toggleTheme() {
    const current = this.theme$.value;
    this.theme$.next(current === 'light' ? 'dark' : 'light');
  }
}
