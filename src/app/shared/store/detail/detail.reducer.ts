import { createReducer, on } from '@ngrx/store';
import {
  loadMovieDetail,
  loadMovieDetailSuccess,
  loadTVShowDetail,
  loadTVShowDetailSuccess,
} from './detail.actions';
import { intialState } from './detail.state';

export const detailReducer = createReducer(
  intialState,
  on(loadMovieDetail, (state) => {
    return {
      ...state,
      loadingDetailMovieStatus: 'pending',
    };
  }),
  on(loadMovieDetailSuccess, (state, action) => {
    return {
      ...state,
      loadingDetailMovieStatus: 'success',
      detail: action.payload,
    };
  }),
  on(loadTVShowDetail, (state) => {
    return {
      ...state,
      loadingDetailTVShowStatus: 'pending',
    };
  }),
  on(loadTVShowDetailSuccess, (state, action) => {
    return {
      ...state,
      loadingDetailTVShowStatus: 'success',
      detail: action.payload,
    };
  })
);
