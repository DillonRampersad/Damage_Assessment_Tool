import { TestBed } from '@angular/core/testing';

import { MOCReportService } from './mocreport.service';

describe('MOCReportService', () => {
  let service: MOCReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MOCReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
