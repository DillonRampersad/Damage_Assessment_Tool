import { TestBed } from '@angular/core/testing';

import { FaSignupService } from './fa-signup.service';

describe('FaSignupService', () => {
  let service: FaSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
