import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: Product[];
  @Output() add = new EventEmitter<Product>();

  onAdd(product: Product) {
    debugger;
    this.add.emit(product);
  }
}
