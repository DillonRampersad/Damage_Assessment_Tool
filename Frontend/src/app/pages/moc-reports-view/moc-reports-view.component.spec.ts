import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocReportsViewComponent } from './moc-reports-view.component';

describe('MocReportsViewComponent', () => {
  let component: MocReportsViewComponent;
  let fixture: ComponentFixture<MocReportsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocReportsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocReportsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
