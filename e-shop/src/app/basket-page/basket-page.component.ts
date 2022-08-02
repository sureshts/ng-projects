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
  basketItems: BasketItem[] = [];
  products: Record<number, Product | null> = {};

  constructor(
    private productService: ProductService,
    private basketService: BasketService) {
    
    this.basketItems = this.basketService.getItems();
    this.fetchProducts();
  }

  private fetchProduct(productID: number): void {
    this.productService.getProduct(productID)
      .subscribe({
        next: product => {
          this.products[productID] = product;
        },
        error: _ => {
          this.products[productID] = null;
        }
      });
  }

  private fetchProducts(): void {
    for(let i = 0; i < this.basketItems.length; i++) {
      this.fetchProduct(this.basketItems[i].productID);
    }
  }

  changeQuantity(productID: number, event: any): void {
    let quantity = event.target.value;
    if(quantity <= 0 && !window.confirm("Are you sure you want to remove this item from your basket?")) {
      let i;
      for(i = 0; i < this.basketItems.length; i++)
        if(this.basketItems[i].productID == productID)
          break;
      if(i == this.basketItems.length) return;
      event.target.value = this.basketItems[i].quantity;
      return;
    }
    this.basketService.setProductQuantity(productID, quantity);
    this.basketItems = this.basketService.getItems();
  }

  removeItem(productID: number): void {
    if(window.confirm("Are you sure you want to remove this item from your basket?")) {
      this.basketService.removeProduct(productID);
      this.basketItems = this.basketService.getItems();
    }
  }

  clearBasket(): void {
    if(window.confirm("Are you sure you want to clear your basket?")) {
      this.basketService.clearBasket();
      this.basketItems = this.basketService.getItems();
    }
  }
}
