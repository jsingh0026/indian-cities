import { TestBed } from '@angular/core/testing';

import { GetCitiesServiceService } from './get-cities-service.service';

describe('GetCitiesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCitiesServiceService = TestBed.get(GetCitiesServiceService);
    expect(service).toBeTruthy();
  });
});
