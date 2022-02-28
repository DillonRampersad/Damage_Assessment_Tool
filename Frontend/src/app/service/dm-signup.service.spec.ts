import { TestBed } from '@angular/core/testing';

import { DmSignupService } from './dm-signup.service';

describe('DmSignupService', () => {
  let service: DmSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
