import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IProductsState, productsFeatureKey } from './products.reducer';

export const selectProductsState =
  createFeatureSelector<IProductsState>(productsFeatureKey);

export const selectResults = createSelector(
  selectProductsState,
  ({ results }) => results
);

export const selectAnalogs = createSelector(
  selectProductsState,
  ({ analogs }) => analogs
);

export const selectActiveElement = createSelector(
  selectProductsState,
  ({ activeElement }) => activeElement
);

export const selectUsage = createSelector(
  selectProductsState,
  ({ usage }) => usage
);

export const selectCharacteristics = createSelector(
  selectProductsState,
  ({ characteristics }) => characteristics
);
