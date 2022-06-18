import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TmdbService } from '../../services/tmdb/tmdb.service';
import {
  loadMovieDetail,
  loadMovieDetailSuccess,
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
  loadTVShowDetail,
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

  loadMovieDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovieDetail),
      mergeMap((action) =>
        this.tmdbService.getDetailMovie(action.id).pipe(
          map((detail) => loadMovieDetailSuccess({ payload: detail })),
          catchError(() => of(loadTVShowsError()))
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
          catchError(() => of(loadTVShowsError()))
        )
      )
    )
  );
}
