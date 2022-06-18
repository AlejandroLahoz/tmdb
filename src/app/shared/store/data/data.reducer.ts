import { createReducer, on } from '@ngrx/store';
import {
  loadDetail,
  loadDetailSuccess,
  loadMovies,
  loadMoviesSuccess,
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
  on(loadDetail, (state) => {
    return {
      ...state,
      loadingListTVShowStatus: 'pending',
    };
  }),
  on(loadDetailSuccess, (state, action) => {
    return {
      ...state,
      loadingListTVShowStatus: 'success',
      detailMovie: action.payload,
    };
  })
);
