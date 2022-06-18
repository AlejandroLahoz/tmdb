import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TmdbService } from '../../services/tmdb/tmdb.service';
import {
  loadDetail,
  loadDetailSuccess,
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
  loadTVShows,
  loadTVShowsError,
  loadTVShowsSuccess,
} from './data.actions';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private tmdbService: TmdbService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() =>
        this.tmdbService.getPopularMovies().pipe(
          map((movies) => loadMoviesSuccess({ payload: movies })),
          catchError(() => of(loadMoviesError()))
        )
      )
    )
  );

  loadTVShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTVShows),
      mergeMap(() =>
        this.tmdbService.getPopularTVShows().pipe(
          map((tvShows) => loadTVShowsSuccess({ payload: tvShows })),
          catchError(() => of(loadTVShowsError()))
        )
      )
    )
  );

  loadDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDetail),
      mergeMap((action) =>
        this.tmdbService.getDetailMovie(action.id).pipe(
          map((detail) => loadDetailSuccess({ payload: detail })),
          catchError(() => of(loadTVShowsError()))
        )
      )
    )
  );
}
