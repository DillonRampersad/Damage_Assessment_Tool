import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreFacViewFullComponent } from './ad-pre-fac-view-full.component';

describe('AdPreFacViewFullComponent', () => {
  let component: AdPreFacViewFullComponent;
  let fixture: ComponentFixture<AdPreFacViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPreFacViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreFacViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
