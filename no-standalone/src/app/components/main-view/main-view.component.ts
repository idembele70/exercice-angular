import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

import { ProductService } from '../../services/mid/day-05/product.service';
import { Product } from '../../models/mid/day-05/product';
import { UserService } from '../../services/mid/day-05/user.service';
import { User } from '../../models/mid/day-05/user';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnInit, OnDestroy {
 private readonly productService = inject(ProductService);
 private readonly fb = inject(FormBuilder);
 private readonly userService = inject(UserService);
 users: User[] = [];
 private readonly destroy$ = new Subject<void>();

 readonly addProductForm = this.fb.nonNullable.group({
  name: ['', Validators.required],
 });

 readonly products$ = this.productService.getProducts$();

  get name() {
    return this.addProductForm.get('name');
  }

 onAddProduct() {
  const product = { id: Date.now(), name: this.name!.value.trim() };
  this.productService.addProduct(product);
  this.addProductForm.reset();
 }

 onRemoveProduct(id: number) {
  console.log('inside');
  this.productService.removeProduct(id)
 }

  trackById(index: number, product: Product) {
    return product.id;
  }

  ngOnInit() {
    this.userService.getUsers$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => this.users = users);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
