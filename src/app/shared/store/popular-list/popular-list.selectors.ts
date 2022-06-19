import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularListState } from './popular-list.state';

export const getDataState =
  createFeatureSelector<PopularListState>('popularList');
export const getListMovie = createSelector(
  getDataState,
  (state) => state.listMovie
);
export const getListTVShow = createSelector(
  getDataState,
  (state) => state.listTVShow
);
