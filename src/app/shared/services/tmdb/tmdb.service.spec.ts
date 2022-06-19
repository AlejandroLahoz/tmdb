/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { URL } from '../../constants/url';
import { ApiService } from '../api/api.service';
import { TmdbService } from '../tmdb/tmdb.service';

class ApiServiceStub {
  get<T>(service: string): Observable<T> {
    return of({} as T);
  }
}

describe('Service: Tmdb', () => {
  let apiServiceInjected: ApiServiceStub;
  let tmdbService: TmdbService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TmdbService,
        {
          provide: ApiService,
          useClass: ApiServiceStub,
        },
      ],
    });
    tmdbService = TestBed.inject(TmdbService);
    apiServiceInjected = TestBed.inject(ApiService);
  });

  it('should ...', inject([TmdbService], (service: TmdbService) => {
    expect(service).toBeTruthy();
  }));

  it(`should call api service get on getPopularMovies with endpoint'`, () => {
    const spy = spyOn(apiServiceInjected, 'get').and.callThrough();
    tmdbService.getPopularMovies();
    expect(spy).toHaveBeenCalledWith(URL.POPULAR.MOVIES);
  });

  it(`should call api service get on getPopularTVShows with endpoint'`, () => {
    const spy = spyOn(apiServiceInjected, 'get').and.callThrough();
    tmdbService.getPopularTVShows();
    expect(spy).toHaveBeenCalledWith(URL.POPULAR.TVSHOWS);
  });

  it(`should call api service get with id movie on getDetailMovie with endpoint'`, () => {
    const spy = spyOn(apiServiceInjected, 'get').and.callThrough();
    const idMock = '1';
    tmdbService.getDetailMovie(Number(idMock));
    expect(spy).toHaveBeenCalledWith(
      `${URL.DETAIL.MOVIE}/${idMock}?append_to_response=recommendations`
    );
  });

  it(`should call api service get with id tv show on getDetailTVShow with endpoint'`, () => {
    const spy = spyOn(apiServiceInjected, 'get').and.callThrough();
    const idMock = '1';
    tmdbService.getDetailTVShow(Number(idMock));
    expect(spy).toHaveBeenCalledWith(
      `${URL.DETAIL.TVSHOW}/${idMock}?append_to_response=recommendations`
    );
  });
});
