import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product: Product | undefined | null = undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {

    this.product = undefined;
    let id: any = this.route.snapshot.paramMap.get('id');
    if(id == null) id = "";
    id = +id;
    if(isNaN(id)) id = 0;

    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }
}
