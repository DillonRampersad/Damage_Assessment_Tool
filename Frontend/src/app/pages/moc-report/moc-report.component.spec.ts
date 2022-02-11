import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocReportComponent } from './moc-report.component';

describe('MocReportComponent', () => {
  let component: MocReportComponent;
  let fixture: ComponentFixture<MocReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
