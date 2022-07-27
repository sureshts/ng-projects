import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { Product } from '../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent {
  products?: Product[];

  search?: string;
  category?: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.products = undefined;
        this.search = undefined;
        this.category = undefined;
        let searchParam = this.route.snapshot.paramMap.get('search');
        let categoryParam = this.route.snapshot.paramMap.get('category');
        if(searchParam){
          this.search = searchParam.replace(/[^\w|-]/g, '').replace("-", " ");
        }
        if(categoryParam){
          this.category = categoryParam.replace(/[^\w|-]/g, '');
        }
        this.productService.getProducts(this.category, this.search).subscribe(products => {
          this.products = products;
        })
      }
    });
  }

}
