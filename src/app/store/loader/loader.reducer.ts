import { createReducer, on } from '@ngrx/store';

import {
  AnalogsLoader,
  AuthLoader,
  CharacteristicsLoader,
  ResultsLoader,
  UsageLoader,
} from './loader.actions';

export const loaderFeatureKey = 'loader';

export interface ILoaderState {
  complexLoader: {
    authLoader: boolean;
    resultsLoader: boolean;
    analogsLoader: boolean;
    usageLoader: boolean;
    characteristicsLoader: boolean;
  };
}
/**
 * @memberof initialLoaderState
 * For a better approach, it is better to use one field isOn: boolean,
 * but in this case, when same api-calls triggered in different moments,
 * loader is On, while at least one element is true
 */
export const initialLoaderState: ILoaderState = {
  complexLoader: {
    authLoader: false,
    resultsLoader: false,
    analogsLoader: false,
    usageLoader: false,
    characteristicsLoader: false,
  },
};

export const LoaderReducer = createReducer(
  initialLoaderState,

  on(AuthLoader, (state, { show }) => ({
    ...state,
    complexLoader: { ...state.complexLoader, authLoader: show },
  })),

  on(ResultsLoader, (state, { show }) => ({
    ...state,
    complexLoader: { ...state.complexLoader, resultsLoader: show },
  })),

  on(AnalogsLoader, (state, { show }) => ({
    ...state,
    complexLoader: { ...state.complexLoader, analogsLoader: show },
  })),

  on(UsageLoader, (state, { show }) => ({
    ...state,
    complexLoader: { ...state.complexLoader, usageLoader: show },
  })),

  on(CharacteristicsLoader, (state, { show }) => ({
    ...state,
    complexLoader: { ...state.complexLoader, characteristicsLoader: show },
  }))
);
