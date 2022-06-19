import { createAction, props } from '@ngrx/store';
import { Movie } from '../../interfaces/movie';
import { TVShow } from '../../interfaces/tv-shows';

export const loadMovies = createAction('[List Component] Load Movies');
export const loadMoviesSuccess = createAction(
  '[List Component] Load Movies Success',
  props<{ payload: Movie[] }>()
);
export const loadMoviesError = createAction(
  '[List Component] Load Movies Error'
);

export const loadTVShows = createAction('[List Component] Load TV Shows');
export const loadTVShowsSuccess = createAction(
  '[List Component] Load TV Shows Success',
  props<{ payload: TVShow[] }>()
);
export const loadTVShowsError = createAction(
  '[List Component] Load TV Shows Error'
);
