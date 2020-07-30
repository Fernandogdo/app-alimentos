import { TestBed } from '@angular/core/testing';

import { CustomvalidationsService } from './customvalidations.service';

describe('CustomvalidationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomvalidationsService = TestBed.get(CustomvalidationsService);
    expect(service).toBeTruthy();
  });
});
