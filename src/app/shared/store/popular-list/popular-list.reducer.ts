import { createReducer, on } from '@ngrx/store';
import {
  loadMovies,
  loadMoviesSuccess,
  loadTVShows,
  loadTVShowsSuccess,
} from './popular-list.actions';
import { intialState } from './popular-list.state';

export const popularListReducer = createReducer(
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
  })
);
