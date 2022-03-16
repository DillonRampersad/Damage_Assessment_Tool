import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMocReportComponent } from './ad-moc-report.component';

describe('AdMocReportComponent', () => {
  let component: AdMocReportComponent;
  let fixture: ComponentFixture<AdMocReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMocReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMocReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
