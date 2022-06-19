import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TmdbService } from '../../services/tmdb/tmdb.service';
import {
  loadMovieDetail,
  loadMovieDetailSuccess,
  loadTVShowDetail,
} from './detail.actions';

@Injectable()
export class DetailEffects {
  constructor(private actions$: Actions, private tmdbService: TmdbService) {}

  loadMovieDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovieDetail),
      mergeMap((action) =>
        this.tmdbService.getDetailMovie(action.id).pipe(
          map((detail) => loadMovieDetailSuccess({ payload: detail })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadTVShowDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTVShowDetail),
      mergeMap((action) =>
        this.tmdbService.getDetailTVShow(action.id).pipe(
          map((detail) => loadMovieDetailSuccess({ payload: detail })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
