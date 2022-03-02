import { TestBed } from '@angular/core/testing';

import { DaformequService } from './daformequ.service';

describe('DaformequService', () => {
  let service: DaformequService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaformequService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
