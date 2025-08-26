import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly #items$ = new BehaviorSubject<string[]>([]);
  
  addItem(item: string) {
    const current = this.#items$.value;
    this.#items$.next([...current, item]);
  }

  getItems$() {
    return this.#items$.asObservable();
  }
}
