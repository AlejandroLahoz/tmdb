import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
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
import { getListMovie, getListTVShow } from './data.selectors';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private tmdbService: TmdbService,
    private store: Store
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      withLatestFrom(this.store.select(getListMovie)),
      mergeMap(([_, cache]) => {
        if (cache.length) {
          return of(loadMoviesSuccess({ payload: cache }));
        }
        return this.tmdbService.getPopularMovies().pipe(
          map((movies) => loadMoviesSuccess({ payload: movies })),
          catchError(() => of(loadMoviesError()))
        );
      })
    )
  );

  loadTVShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTVShows),
      withLatestFrom(this.store.select(getListTVShow)),
      mergeMap(([_, cache]) => {
        if (cache.length) {
          return of(loadTVShowsSuccess({ payload: cache }));
        }
        return this.tmdbService.getPopularTVShows().pipe(
          map((tvShows) => loadTVShowsSuccess({ payload: tvShows })),
          catchError(() => of(loadTVShowsError()))
        );
      })
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
