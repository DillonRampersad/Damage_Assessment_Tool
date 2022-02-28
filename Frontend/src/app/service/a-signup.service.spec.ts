import { TestBed } from '@angular/core/testing';

import { ASignupService } from './a-signup.service';

describe('ASignupService', () => {
  let service: ASignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ASignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
