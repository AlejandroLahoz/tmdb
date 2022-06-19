import { createAction, props } from '@ngrx/store';
import { DetailReqRoot } from '../../interfaces/detail-req';

export const loadMovieDetail = createAction(
  '[Detail Component] Detail Movie Detail',
  props<{ id: number }>()
);
export const loadMovieDetailSuccess = createAction(
  '[Detail Component] Load Movie Detail Success',
  props<{ payload: DetailReqRoot }>()
);

export const loadTVShowDetail = createAction(
  '[Detail Component] Detail TV Show Detail',
  props<{ id: number }>()
);
export const loadTVShowDetailSuccess = createAction(
  '[Detail Component] Load TV Show Detail Success',
  props<{ payload: DetailReqRoot }>()
);
