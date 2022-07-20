import {
  productReducer,
  ProductState,
} from '../../product/store/reducers/product.reducer';

const reducers = {
  product: productReducer,
};

interface AppState {
  product: ProductState;
}

export { reducers, AppState };
