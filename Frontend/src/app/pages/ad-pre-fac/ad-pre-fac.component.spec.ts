import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreFacComponent } from './ad-pre-fac.component';

describe('AdPreFacComponent', () => {
  let component: AdPreFacComponent;
  let fixture: ComponentFixture<AdPreFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPreFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
