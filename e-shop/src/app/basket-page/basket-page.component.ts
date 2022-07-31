import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { BasketService } from '../basket.service';
import { Product, BasketItem } from '../models';

type FilledBasketItem = {
  basketItem: BasketItem,
  product: Product | undefined | null,
};

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent {
  items: FilledBasketItem[] = [];

  constructor(
    private productService: ProductService,
    private basketService: BasketService) {
    
    let basketItems: BasketItem[] = this.basketService.getItems();

    for(let i = 0; i < basketItems.length; i++) {
      this.items.push({
        basketItem: basketItems[i],
        product: undefined,
      });

      this.productService.getProduct(basketItems[i].productID)
        .subscribe({
          next: product => {
            this.items[i].product = product;
          },
          error: _ => {
            this.items[i].product = null;
          }
        });
    }
  }

}
