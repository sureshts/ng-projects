import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { BasketService } from '../basket.service';
import { Product } from '../models';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productID: number;
  product: Product | undefined | null = undefined;

  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    private route: ActivatedRoute) {

    let id: any = this.route.snapshot.paramMap.get('id');
    if(id == null) id = "";
    id = +id;
    if(isNaN(id)) id = 0;
    this.productID = id;
    this.product = undefined;

    this.productService.getProduct(id).subscribe({
      next: product => {
        this.product = product;
      },
      error: _ => {
        this.product = null;
      }
    });
  }

  addToBasket(): void {
    this.basketService.addProduct(this.productID);
  }
}
