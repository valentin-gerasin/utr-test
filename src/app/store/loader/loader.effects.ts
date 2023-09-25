import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import {
  AnalogsLoader,
  AuthLoader,
  CharacteristicsLoader,
  ResultsLoader,
  UsageLoader,
} from './loader.actions';
import {
  UserLogin,
  UserLoginFailed,
  UserLoginSuccess,
} from '../auth/auth.actions';
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
} from '../products/products.actions';

@Injectable()
export class LoaderEffects {
  constructor(private actions$: Actions) {}

  showAuthLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserLogin),
      map(() => AuthLoader({ show: true }))
    )
  );

  hideAuthLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserLoginSuccess, UserLoginFailed),
      map(() => AuthLoader({ show: false }))
    )
  );

  showResultsLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetItemsByArticle),
      map(() => ResultsLoader({ show: true }))
    )
  );

  hideResultsLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetItemsSuccess, GetItemsFailed),
      map(() => ResultsLoader({ show: false }))
    )
  );

  showAnalogsLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetActiveElement, GetItemsSuccess),
      map(() => AnalogsLoader({ show: true }))
    )
  );

  hideAnalogsLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetAnalogsSuccess, GetAnalogsFailed),
      map(() => AnalogsLoader({ show: false }))
    )
  );

  showUsageLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetDetailUsage),
      map(() => UsageLoader({ show: true }))
    )
  );

  hideUsageLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetDetailUsageSuccess, GetDetailUsageFailed),
      map(() => UsageLoader({ show: false }))
    )
  );

  showCharacteristicsLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetDetailCharacteristics),
      map(() => CharacteristicsLoader({ show: true }))
    )
  );

  hideCharacteristicsLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetDetailCharacteristicsSuccess, GetDetailCharacteristicsFailed),
      map(() => CharacteristicsLoader({ show: false }))
    )
  );
}
