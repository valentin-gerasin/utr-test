import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { ProductsService } from 'src/app/services/products/products.service';
import {
  EProductsActionsTypes,
  GetAnalogsFailed,
  GetAnalogsSuccess,
  GetDetailCharacteristicsFailed,
  GetDetailCharacteristicsSuccess,
  GetDetailUsageFailed,
  GetDetailUsageSuccess,
  GetItemsFailed,
  GetItemsSuccess,
} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  /**
   * @memberof getProducts$
   * effect to fetch results
   */

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EProductsActionsTypes.GET_ITEMS_BY_ARTICLE),
      switchMap(({ type, article }) =>
        this.productsService.findByArticle(article).pipe(
          map((data) => GetItemsSuccess({ products: data.details })),
          catchError((error: HttpErrorResponse) =>
            of(GetItemsFailed({ payload: error }))
          )
        )
      )
    )
  );

  /**
   * @memberof getAnalogs$
   * effect to fetch analogs for the first element from results
   */

  getAnalogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EProductsActionsTypes.GET_ITEMS_SUCCESS),
      switchMap(({ type, products }) =>
        this.productsService.findAnalogs(products).pipe(
          map((data) => {
            return GetAnalogsSuccess({ analogs: data });
          }),
          catchError((error: HttpErrorResponse) =>
            of(GetItemsFailed({ payload: error }))
          )
        )
      )
    )
  );

  /**
   * @memberof getAnalogsByClick$
   * effect to fetch analogs on clicking
   */

  getAnalogsByClick$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EProductsActionsTypes.SET_ACTIVE_ELEMENT),
      switchMap(({ type, element }) => {
        return this.productsService.findAnalogs(element).pipe(
          map((data) => GetAnalogsSuccess({ analogs: data })),
          catchError((error: HttpErrorResponse) =>
            of(GetAnalogsFailed({ payload: error }))
          )
        );
      })
    )
  );

  /**
   * @memberof getAnalogsByClick$
   * effect to fetch usage on clicking
   */

  getDetailUsage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EProductsActionsTypes.GET_DETAIL_USAGE),
      switchMap(({ type, id }) => {
        return this.productsService.getDetailUsage(id).pipe(
          map((data) => GetDetailUsageSuccess({ usage: data })),
          catchError((error: HttpErrorResponse) =>
            of(GetDetailUsageFailed({ payload: error }))
          )
        );
      })
    )
  );

  /**
   * @memberof getDetailCharacteristics$
   * effect to fetch characteristics on clicking
   */

  getDetailCharacteristics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EProductsActionsTypes.GET_DETAIL_CHARACTERISTICS),
      switchMap(({ type, id }) => {
        return this.productsService.getDetailCharacteristics(id).pipe(
          map((data) =>
            GetDetailCharacteristicsSuccess({ characteristics: data })
          ),
          catchError((error: HttpErrorResponse) =>
            of(GetDetailCharacteristicsFailed({ payload: error }))
          )
        );
      })
    )
  );
}
