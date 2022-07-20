import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/product.reducer';

export const getProductState = createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.list
);
