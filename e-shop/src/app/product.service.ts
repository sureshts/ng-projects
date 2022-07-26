import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(category?: string, search?: string): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiServer + "/products").pipe(
      map(products => {
        if(category) {
          products = products.filter(
            product => product.category.toLowerCase() == category.toLowerCase()
          );
        }
        if(search) {
          products = products.filter(
            product => product.name.toLowerCase().includes(search.toLowerCase())
          );
        }
        return products;
      })
    );
  }
}
