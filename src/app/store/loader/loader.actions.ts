import { createAction, props } from '@ngrx/store';

export enum ELoaderActionsTypes {
  AUTH_LOADER = '[Loader] Auth Loader',
  RESULTS_LOADER = '[Loader] Results Loader',
  ANALOGS_LOADER = '[Loader] Analogs Loader',
  USAGE_LOADER = '[Loader] Usage Loader',
  CHARACTERISTICS_LOADER = '[Loader] Characteristics Loader',
}

export const AuthLoader = createAction(
  ELoaderActionsTypes.AUTH_LOADER,
  props<{ show: boolean }>()
);

export const ResultsLoader = createAction(
  ELoaderActionsTypes.RESULTS_LOADER,
  props<{ show: boolean }>()
);

export const AnalogsLoader = createAction(
  ELoaderActionsTypes.ANALOGS_LOADER,
  props<{ show: boolean }>()
);

export const UsageLoader = createAction(
  ELoaderActionsTypes.USAGE_LOADER,
  props<{ show: boolean }>()
);

export const CharacteristicsLoader = createAction(
  ELoaderActionsTypes.CHARACTERISTICS_LOADER,
  props<{ show: boolean }>()
);
