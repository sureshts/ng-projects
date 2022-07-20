import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/model/product.model';

export const LOAD_PRODUCTS = '[PRODUCT] load products';
export const LOAD_PRODUCTS_SUCCESS = '[PRODUCT] load products Success';
export const LOAD_PRODUCTS_FAILURE = '[PRODUCT] load products Failure';

export const loadProducts = createAction(
    LOAD_PRODUCTS
);

export const loadProductsSuccess = createAction(
    LOAD_PRODUCTS_SUCCESS,
  props<{products: Product[]}>()
)

export const loadProductsFailure = createAction(
    LOAD_PRODUCTS_FAILURE,
  props<{message: string}>()
)