import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../../../models/mid/day-05/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.scss'
})
export class ProductRowComponent implements OnInit {
  @Input({ required: true}) product: Product = {
    id: 1,
    name: '',
  }

  @Output() removeProduct: EventEmitter<number> = new EventEmitter();

  onRemoveProduct() {
    this.removeProduct.emit(this.product.id);
  }

  ngOnInit() {
    console.log('OnInit');
  }
}
