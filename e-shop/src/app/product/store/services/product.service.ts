import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    const fullUrl = `${environment.apiUrl}products`;
    return this.httpClient.get<Product[]>(fullUrl);
  }
}
