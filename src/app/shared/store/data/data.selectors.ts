import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from './data.state';

export const getDataState = createFeatureSelector<DataState>('data');
export const getListMovie = createSelector(
  getDataState,
  (state) => state.listMovie
);
export const getListTVShow = createSelector(
  getDataState,
  (state) => state.listTVShow
);

export const getDetailMovie = createSelector(
  getDataState,
  (state) => state.detailMovie
);
