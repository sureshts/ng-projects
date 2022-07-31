export var CATEGORIES: string[] = [
  "electronics",
  "books",
  "clothing",
  "sports",
  "foodstuffs",
  "stationary",
  "pet-supplies",
  "other"
];

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
};

export type BasketItem = {
  productID: number;
  quantity: number;
};
