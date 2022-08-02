import { Injectable } from '@angular/core';
import { BasketItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  private getProductIndex(items: BasketItem[], productID: number): number | null {
    for(let i = 0; i < items.length; i++)
      if(items[i].productID === productID)
        return i;
    return null;
  }

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
    let i = this.getProductIndex(items, productID);

    if(i == null) {
      items.push({
        productID: productID,
        quantity: 1,
      });
    } else {
      items[i].quantity += 1;
    }

    localStorage.setItem("basket_items", JSON.stringify(items));
  }

  removeProduct(productID: number): void {
    let items: BasketItem[] = this.getItems();
    let i = this.getProductIndex(items, productID);
    if(i == null) return;
    items.splice(i, 1);
    localStorage.setItem("basket_items", JSON.stringify(items));
  }

  setProductQuantity(productID: number, quantity: number): void {
    if(quantity <= 0) {
      this.removeProduct(productID);
      return;
    }

    let items: BasketItem[] = this.getItems();
    let i = this.getProductIndex(items, productID);

    if(i == null) {
      items.push({
        productID: productID,
        quantity: quantity,
      });
    } else {
      items[i].quantity = quantity;
    }

    localStorage.setItem("basket_items", JSON.stringify(items));
  }

  clearBasket(): void {
    let items: BasketItem[] = [];
    localStorage.setItem("basket_items", JSON.stringify(items));
  }
}
