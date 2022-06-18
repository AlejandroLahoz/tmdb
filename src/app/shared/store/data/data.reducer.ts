import { createReducer, on } from '@ngrx/store';
import {
  loadMovieDetail,
  loadMovieDetailSuccess,
  loadMovies,
  loadMoviesSuccess,
  loadTVShowDetail,
  loadTVShowDetailSuccess,
  loadTVShows,
  loadTVShowsSuccess,
} from './data.actions';
import { intialState } from './data.state';

export const dataReducer = createReducer(
  intialState,
  on(loadMovies, (state) => {
    return {
      ...state,
      loadingListMovieStatus: 'pending',
    };
  }),
  on(loadTVShows, (state) => {
    return {
      ...state,
      loadingListTVShowStatus: 'pending',
    };
  }),
  on(loadMoviesSuccess, (state, action) => {
    return {
      ...state,
      loadingListMovieStatus: 'success',
      listMovie: action.payload,
    };
  }),
  on(loadTVShowsSuccess, (state, action) => {
    return {
      ...state,
      loadingListTVShowStatus: 'success',
      listTVShow: action.payload,
    };
  }),
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
