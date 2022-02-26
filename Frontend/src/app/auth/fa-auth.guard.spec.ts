import { TestBed } from '@angular/core/testing';

import { FaAuthGuard } from './fa-auth.guard';

describe('FaAuthGuard', () => {
  let guard: FaAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FaAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
