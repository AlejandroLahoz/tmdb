import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { TmdbService } from '../../services/tmdb/tmdb.service';
import {
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
  loadTVShows,
  loadTVShowsError,
  loadTVShowsSuccess,
} from './popular-list.actions';
import { getListMovie, getListTVShow } from './popular-list.selectors';

@Injectable()
export class PopularListEffects {
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
}
