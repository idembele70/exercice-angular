import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly #term = new BehaviorSubject<string>('');
  constructor() { }

  readonly searchTerm$ = this.#term.asObservable();

  setSearchTerm(term: string) {
    this.#term.next(term.trim());
  }

  getSearchTerm() {
    return this.#term;
  }
}
