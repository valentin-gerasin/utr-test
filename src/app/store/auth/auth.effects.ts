import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';
import {
  EUserActionsTypes,
  UserLoginFailed,
  UserLoginSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EUserActionsTypes.UserLogin),
      switchMap(({ type, user }) =>
        this.authService.login(user).pipe(
          map((data) => {
            this.authService.setUser(data);
            this.router.navigate(['/search']);

            return UserLoginSuccess();
          }),
          catchError((error: HttpErrorResponse) =>
            of(UserLoginFailed({ payload: error }))
          )
        )
      )
    )
  );
}
