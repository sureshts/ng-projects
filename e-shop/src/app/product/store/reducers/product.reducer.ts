import { Action, createReducer, on } from '@ngrx/store';
import * as productActions from '../actions/product.action';
import { Product } from 'src/app/shared/model/product.model';

export interface ProductState {
  list?: Product[];
  isLoading?: boolean;
  isLoaded?: boolean;
  isLoadingFailure?: boolean;
  error?: string;
}

export const initialState: ProductState = {
  list: [],
  isLoading: false,
  isLoaded: false,
  error: '',
};

const reducer = createReducer(
  initialState,

  //Get products
  on(productActions.loadProducts, (state) => {
    return { ...state, isLoading: true };
  }),
  on(productActions.loadProductsSuccess, (state, result) => {
    return {
      list: result.products,
      isLoading: false,
      isLoaded: true,
    };
  }),
  on(productActions.loadProductsFailure, (state, result) => {
    console.log('Error', result);
    return {
      ...state,
      isLoaded: false,
      isLoading: false,
      error: result.message,
    };
  })
);

export function productReducer(
  state: ProductState | undefined,
  action: Action
): any {
  return reducer(state, action);
}
