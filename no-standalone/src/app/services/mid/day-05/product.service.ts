import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../../../models/mid/day-05/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products$ = new BehaviorSubject<Product[]>([
  {
    id: 1,
    name: 'body cream',
  },
  {
    id: 2,
    name: 'face cream',
  },
  ]);

  addProduct(product: Product) {
    const products = this.products$.value;
    this.updateProducts([...products, product]);
  }

  removeProduct(id: number) {
    const products = this.products$.value;
    const filtered = products.filter(p => p.id !== id);
    this.updateProducts(filtered);
  }

  getProducts$(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  private updateProducts(products: Product[]) {
    this.products$.next(products);
  }
}
