import { TestBed } from '@angular/core/testing';

import { FaSearchService } from './fa-search.service';

describe('FaSearchService', () => {
  let service: FaSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
