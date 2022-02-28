import { TestBed } from '@angular/core/testing';

import { MocSignupService } from './moc-signup.service';

describe('MocSignupService', () => {
  let service: MocSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
