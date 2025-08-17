import { Injectable } from '@angular/core';
import { Article } from '../../../../models/mid/day-01/article';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  readonly #articles$ = new BehaviorSubject<Article[]>([
  {
    name: 'shoes',
    price: 225
  },
  {
    name: 'jeans',
    price: 150,
  },
  ]);

  getArticles$(): Observable<Article[]> {
    return this.#articles$.asObservable();
  }
}
