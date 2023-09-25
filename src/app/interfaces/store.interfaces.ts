import { IAuthState } from 'src/app/store/auth/auth.reducer';
import { ILoaderState } from 'src/app/store/loader/loader.reducer';
import { IProductsState } from 'src/app/store/products/products.reducer';

export interface IAppState {
  auth: IAuthState;
  products: IProductsState;
  loader: ILoaderState;
}
