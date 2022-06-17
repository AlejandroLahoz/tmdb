import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { URL } from '../../constants/url';
import { Movie } from '../../interfaces/movie';
import { PopularMoviesReqRoot } from '../../interfaces/popular-movies-req';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private apiService: ApiService) {}

  getPopularMovies(): Observable<Movie[]> {
    return this.apiService
      .get<PopularMoviesReqRoot>(URL.POPULARMOVIES)
      .pipe(map((response) => response.results));
  }

  getPopularTVShows(): Observable<Movie[]> {
    debugger;
    return this.apiService
      .get<PopularMoviesReqRoot>(URL.POPULARTVSHOWS)
      .pipe(map((response) => response.results));
  }
}
