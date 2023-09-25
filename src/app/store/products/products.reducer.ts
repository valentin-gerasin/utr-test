import { createReducer, on } from '@ngrx/store';
import {
  GetAnalogsFailed,
  GetAnalogsSuccess,
  GetDetailCharacteristics,
  GetDetailCharacteristicsFailed,
  GetDetailCharacteristicsSuccess,
  GetDetailUsage,
  GetDetailUsageFailed,
  GetDetailUsageSuccess,
  GetItemsByArticle,
  GetItemsFailed,
  GetItemsSuccess,
  SetActiveElement,
} from './products.actions';
import { HttpErrorResponse } from '@angular/common/http';
import {
  IProductItem,
  IItemUsage,
  ICharacteristic,
} from 'src/app/interfaces/products.interfaces';

// For mock usage
import {
  mockDetailsUsage,
  mockICharacteristic,
  mockItem,
} from 'src/app/models/products.models';

export interface IProductsState {
  results: IProductItem[];
  analogs: IProductItem[];
  activeElement: IProductItem | null;
  characteristics: ICharacteristic[];
  usage: IItemUsage[];
  error: null | HttpErrorResponse;
}

export const productsFeatureKey = 'products';

/**
 * @memberof initialProductsState
 * I left the mock data so that I could look at the workability of the table,
 * that uses mainly data from the usage api, which one is receiving empty arrays for every element.
 * And the usage table with dropdowns because of it are always empty,
 * so I took the data form the documentation to make this functionality work
 */

// export const initialProductsState: IProductsState = {
//   results: [mockItem],
//   analogs: [],
//   activeElement: null,
//   usage: mockDetailsUsage,
//   characteristics: mockICharacteristic,
//   error: null,
// };

export const initialProductsState: IProductsState = {
  results: [],
  analogs: [],
  activeElement: null,
  usage: [],
  characteristics: [],
  error: null,
};

export const ProductsReducer = createReducer(
  initialProductsState,
  on(GetItemsByArticle, (state) => {
    return state;
  }),
  on(GetItemsSuccess, (state, { products }) => {
    return { ...state, results: products, usage: [], characteristics: [] };
  }),
  on(GetItemsFailed, (state, { payload }) => {
    return { ...state, error: payload };
  }),

  on(GetAnalogsSuccess, (state, { analogs }) => {
    return { ...state, analogs };
  }),
  on(GetAnalogsFailed, (state, { payload }) => {
    return { ...state, error: payload };
  }),

  on(SetActiveElement, (state, { element }) => {
    return { ...state, activeElement: element };
  }),

  on(GetDetailUsage, (state) => {
    return state;
  }),
  on(GetDetailUsageSuccess, (state, { usage }) => {
    return { ...state, usage: [...usage] };
  }),
  on(GetDetailUsageFailed, (state, { payload }) => {
    return { ...state, error: payload };
  }),

  on(GetDetailCharacteristics, (state) => {
    return state;
  }),
  on(GetDetailCharacteristicsSuccess, (state, { characteristics }) => {
    return { ...state, characteristics: characteristics };
  }),
  on(GetDetailCharacteristicsFailed, (state, { payload }) => {
    return { ...state, error: payload };
  })
);
