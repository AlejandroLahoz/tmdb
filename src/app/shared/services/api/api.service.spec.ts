/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { ApiService } from '../api/api.service';

describe('Service: Api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
