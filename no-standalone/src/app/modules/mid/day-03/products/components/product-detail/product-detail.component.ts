import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  constructor(private readonly route: ActivatedRoute) {};
  readonly id$ = this.route.paramMap.pipe(
    map(params => params.get('id'))
  );
}
