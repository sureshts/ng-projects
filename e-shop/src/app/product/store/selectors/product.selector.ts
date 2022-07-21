import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/product.reducer';

export const getProductState =
  createFeatureSelector<ProductState>('productState');

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => {
    return state && state.products;
  }
);
