/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { TmdbService } from '../tmdb/tmdb.service';

describe('Service: Tmdb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbService],
    });
  });

  it('should ...', inject([TmdbService], (service: TmdbService) => {
    expect(service).toBeTruthy();
  }));
});
