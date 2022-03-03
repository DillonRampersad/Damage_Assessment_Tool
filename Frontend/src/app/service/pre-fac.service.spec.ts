import { TestBed } from '@angular/core/testing';

import { PreFacService } from './pre-fac.service';

describe('PreFacService', () => {
  let service: PreFacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreFacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
