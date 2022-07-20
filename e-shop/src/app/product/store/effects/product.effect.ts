import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import * as productActions from '../actions/product.action';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadProducts),
      exhaustMap((action) => {
        return this.productService.getProducts().pipe(
          map((response) => {
            return productActions.loadProductsSuccess({ products: response });
          }),
          catchError((error: any) => {
            return of(
              productActions.loadProductsFailure({ message: error.message })
            );
          })
        );
      })
    )
  );
}
