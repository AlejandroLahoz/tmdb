import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { URL } from '../../constants/url';
import { DetailReqRoot } from '../../interfaces/detail-req';
import { Movie } from '../../interfaces/movie';
import { PopularMoviesReqRoot } from '../../interfaces/popular-movies-req';
import { TVShowsReqRoot } from '../../interfaces/popular-tv-shows-req';
import { TVShow } from '../../interfaces/tv-shows';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private apiService: ApiService) {}

  getPopularMovies(): Observable<Movie[]> {
    return this.apiService
      .get<PopularMoviesReqRoot>(URL.POPULAR.MOVIES)
      .pipe(map((response) => response.results));
  }

  getPopularTVShows(): Observable<TVShow[]> {
    return this.apiService
      .get<TVShowsReqRoot>(URL.POPULAR.TVSHOWS)
      .pipe(map((response) => response.results));
  }

  getDetailMovie(id: number): Observable<DetailReqRoot> {
    return this.apiService.get<DetailReqRoot>(
      `${URL.DETAIL.MOVIE}/${id}?append_to_response=recommendations`
    );
  }

  getDetailTVShow(id: number): Observable<any> {
    return this.apiService.get<any>(
      `${URL.DETAIL.TVSHOW}/${id}?append_to_response=recommendations`
    );
  }
}
