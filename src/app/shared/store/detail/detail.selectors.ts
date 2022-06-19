import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailState } from './detail.state';

export const getDetailState = createFeatureSelector<DetailState>('detail');

export const getDetail = createSelector(
  getDetailState,
  (state) => state.detail
);
