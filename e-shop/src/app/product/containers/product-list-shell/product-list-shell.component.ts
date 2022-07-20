import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { LOAD_PRODUCTS } from '../../store/actions/product.action';
import { ProductService } from '../../store/services/product.service';

@Component({
  selector: 'app-product-list-shell',
  templateUrl: './product-list-shell.component.html',
  styleUrls: ['./product-list-shell.component.scss'],
})
export class ProductListShellComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private productService: ProductService
  ) {
    store.dispatch({ type: LOAD_PRODUCTS });
  }

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((i) => {
    //   console.log('Data', i);
    // });
  }
}
