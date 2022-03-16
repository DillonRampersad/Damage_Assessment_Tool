import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMocReportViewComponent } from './ad-moc-report-view.component';

describe('AdMocReportViewComponent', () => {
  let component: AdMocReportViewComponent;
  let fixture: ComponentFixture<AdMocReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMocReportViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMocReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
