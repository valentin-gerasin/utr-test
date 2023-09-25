import { createFeatureSelector } from '@ngrx/store';

import { authFeatureKey, IAuthState } from './auth.reducer';

export const selectAuthState =
  createFeatureSelector<IAuthState>(authFeatureKey);
