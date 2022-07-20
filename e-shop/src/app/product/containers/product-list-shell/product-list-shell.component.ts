import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';
import { AppState } from 'src/app/store/reducers';
import { LOAD_PRODUCTS } from '../../store/actions/product.action';
import { getProducts } from '../../store/selectors/product.selector';
import { ProductService } from '../../store/services/product.service';

@Component({
  selector: 'app-product-list-shell',
  templateUrl: './product-list-shell.component.html',
  styleUrls: ['./product-list-shell.component.scss'],
})
export class ProductListShellComponent implements OnInit {
  products$: Observable<Product[]>;
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
    this.products$ = this.store.pipe(select(getProducts));
  }
}
