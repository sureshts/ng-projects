import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/model/product.model';

import * as productActions from '../actions/product.action';

export interface ProductState {
  products: Product[];
  error?: string;
}

export const initialState: ProductState = {
  products: [],
  error: '',
};

export const productReducer = createReducer(
  initialState,
  on(productActions.loadProducts, (state) => {
    return {
      ...state,
    };
  })
);
