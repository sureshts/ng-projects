import {
  productReducer,
  ProductState,
} from '../../product/store/reducers/product.reducer';

const reducers = {
  productState: productReducer,
};

interface AppState {
  productState: ProductState;
}

export { reducers, AppState };
