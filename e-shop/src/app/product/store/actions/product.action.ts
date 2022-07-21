import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/model/product.model';

export const LOAD_PRODUCTS = '[PRODUCT] load products';
export const LOAD_PRODUCTS_SUCCESS = '[PRODUCT] load products success';
export const LOAD_PRODUCTS_FAILURE = '[PRODUCT] load products failure';

// Action to load all products
export const loadProducts = createAction(LOAD_PRODUCTS);

// Action on load products is a success
export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

// Action on load products is a success
export const loadProductsFailure = createAction(
  LOAD_PRODUCTS_FAILURE,
  props<{ message: string }>()
);
