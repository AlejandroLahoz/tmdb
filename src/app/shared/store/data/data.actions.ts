import { createAction, props } from '@ngrx/store';
import { DetailReqRoot } from '../../interfaces/detail-req';
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

export const loadMovieDetail = createAction(
  '[List Component] Detail Movie Detail',
  props<{ id: number }>()
);
export const loadMovieDetailSuccess = createAction(
  '[Detail Component] Load Movie Detail Success',
  props<{ payload: DetailReqRoot }>()
);

export const loadTVShowDetail = createAction(
  '[List Component] Detail TV Show Detail',
  props<{ id: number }>()
);
export const loadTVShowDetailSuccess = createAction(
  '[Detail Component] Load TV Show Detail Success',
  props<{ payload: DetailReqRoot }>()
);
