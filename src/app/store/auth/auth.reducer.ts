import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { UserLoginFailed } from './auth.actions';

export interface IAuthState {
  error: null | HttpErrorResponse;
}

export const authFeatureKey = 'auth';

export const initialUserState: IAuthState = {
  error: null,
};

export const AuthReducer = createReducer(
  initialUserState,

  on(UserLoginFailed, (state, { payload }) => {
    return {
      ...state,
      error: payload,
    };
  })
);
