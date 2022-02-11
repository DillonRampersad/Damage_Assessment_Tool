import { TestBed } from '@angular/core/testing';

import { DamageAssessmentReportService } from './damage-assessment-report.service';

describe('DamageAssessmentReportService', () => {
  let service: DamageAssessmentReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamageAssessmentReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
