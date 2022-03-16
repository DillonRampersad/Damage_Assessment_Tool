import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreFacViewComponent } from './ad-pre-fac-view.component';

describe('AdPreFacViewComponent', () => {
  let component: AdPreFacViewComponent;
  let fixture: ComponentFixture<AdPreFacViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPreFacViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreFacViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
