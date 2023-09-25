import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ICharacteristic,
  IItemUsage,
  IProductItem,
} from 'src/app/interfaces/products.interfaces';

export enum EProductsActionsTypes {
  GET_ITEMS_BY_ARTICLE = '[Products] Get item by article',
  GET_ITEMS_SUCCESS = '[Products] Get items success',
  GET_ITEMS_FAILED = '[Products] Get items failed',

  GET_ANALOGS_SUCCESS = '[Products] Get analogs success',
  GET_ANALOGS_FAILED = '[Products] Get analogs failed',

  SET_ACTIVE_ELEMENT = '[Products] Set active element',

  GET_DETAIL_USAGE = '[Products] Get detail usage',
  GET_DETAIL_USAGE_SUCCESS = '[Products] Get detail usage success',
  GET_DETAIL_USAGE_FAILED = '[Products] Get detail usage failed',

  GET_DETAIL_CHARACTERISTICS = '[Products] Get detail characteristics',
  GET_DETAIL_CHARACTERISTICS_SUCCESS = '[Products] Get detail characteristics success',
  GET_DETAIL_CHARACTERISTICS_FAILED = '[Products] Get detail characteristics failed',
}

export const GetItemsByArticle = createAction(
  EProductsActionsTypes.GET_ITEMS_BY_ARTICLE,
  props<{ article: string }>()
);

export const GetItemsSuccess = createAction(
  EProductsActionsTypes.GET_ITEMS_SUCCESS,
  props<{ products: IProductItem[] }>()
);

export const GetItemsFailed = createAction(
  EProductsActionsTypes.GET_ITEMS_FAILED,
  props<{ payload: HttpErrorResponse }>()
);

export const GetAnalogsSuccess = createAction(
  EProductsActionsTypes.GET_ANALOGS_SUCCESS,
  props<{ analogs: IProductItem[] }>()
);

export const GetAnalogsFailed = createAction(
  EProductsActionsTypes.GET_ANALOGS_FAILED,
  props<{ payload: HttpErrorResponse }>()
);

export const SetActiveElement = createAction(
  EProductsActionsTypes.SET_ACTIVE_ELEMENT,
  props<{ element: IProductItem }>()
);

export const GetDetailUsage = createAction(
  EProductsActionsTypes.GET_DETAIL_USAGE,
  props<{ id: number }>()
);

export const GetDetailUsageSuccess = createAction(
  EProductsActionsTypes.GET_DETAIL_USAGE_SUCCESS,
  props<{ usage: IItemUsage[] }>()
);

export const GetDetailUsageFailed = createAction(
  EProductsActionsTypes.GET_DETAIL_USAGE_FAILED,
  props<{ payload: HttpErrorResponse }>()
);

export const GetDetailCharacteristics = createAction(
  EProductsActionsTypes.GET_DETAIL_CHARACTERISTICS,
  props<{ id: number }>()
);

export const GetDetailCharacteristicsSuccess = createAction(
  EProductsActionsTypes.GET_DETAIL_CHARACTERISTICS_SUCCESS,
  props<{ characteristics: ICharacteristic[] }>()
);

export const GetDetailCharacteristicsFailed = createAction(
  EProductsActionsTypes.GET_DETAIL_CHARACTERISTICS_FAILED,
  props<{ payload: HttpErrorResponse }>()
);
