import { Component } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent {
  products?: Product[] = undefined;
  loadedProducts: boolean = false;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

}
