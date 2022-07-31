import { Injectable } from '@angular/core';
import { BasketItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  getItems(): BasketItem[] {
    let itemsJson: string | null = localStorage.getItem("basket_items");
    if(itemsJson == null) {
      let items: BasketItem[] = [];
      localStorage.setItem("basket_items", JSON.stringify(items));
      return items;
    }

    let items: BasketItem[] = JSON.parse(itemsJson);
    return items;
  }

  addProduct(productID: number): void {
    let items: BasketItem[] = this.getItems();

    let i;

    for(i = 0; i < items.length; i++) {
      if(items[i].productID === productID) {
        items[i].quantity += 1;
        break;
      }
    }

    if(i == items.length) {
      items.push({
        productID: productID,
        quantity: 1,
      });
    }

    localStorage.setItem("basket_items", JSON.stringify(items));
  }
}
