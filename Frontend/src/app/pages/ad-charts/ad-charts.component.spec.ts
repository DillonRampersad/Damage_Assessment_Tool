import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdChartsComponent } from './ad-charts.component';

describe('AdChartsComponent', () => {
  let component: AdChartsComponent;
  let fixture: ComponentFixture<AdChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
