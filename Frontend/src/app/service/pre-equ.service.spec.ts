import { TestBed } from '@angular/core/testing';

import { PreEquService } from './pre-equ.service';

describe('PreEquService', () => {
  let service: PreEquService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreEquService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
