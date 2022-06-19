/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

class HttpClientStub {
  get<T>(service: string): Observable<T> {
    return of({} as T);
  }
}

describe('Service: Api', () => {
  let httpClientInjected: HttpClientStub;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        {
          provide: HttpClient,
          useClass: HttpClientStub,
        },
      ],
    });
    httpClientInjected = TestBed.inject(HttpClient);
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should call HttpClient get with api + endpoint', inject(
    [ApiService],
    (service: ApiService) => {
      const spy = spyOn(httpClientInjected, 'get').and.callThrough();
      const api = environment.api;
      const endpoint = '/test';
      service.get(endpoint);
      expect(spy).toHaveBeenCalledWith(api + endpoint);
    }
  ));
});
