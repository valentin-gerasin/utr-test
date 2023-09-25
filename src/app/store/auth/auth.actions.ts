import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { ILogin } from 'src/app/interfaces/auth.interfaces';

export enum EUserActionsTypes {
  UserLogin = '[User] Login',
  UserLoginSuccess = '[User] Login Success',
  UserLoginFailed = '[User] Login Failed',
}

export const UserLogin = createAction(
  EUserActionsTypes.UserLogin,
  props<{ user: ILogin }>()
);

export const UserLoginSuccess = createAction(
  EUserActionsTypes.UserLoginSuccess
);

export const UserLoginFailed = createAction(
  EUserActionsTypes.UserLoginFailed,
  props<{ payload: HttpErrorResponse }>()
);
