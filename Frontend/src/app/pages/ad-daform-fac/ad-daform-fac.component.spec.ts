import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDaformFacComponent } from './ad-daform-fac.component';

describe('AdDaformFacComponent', () => {
  let component: AdDaformFacComponent;
  let fixture: ComponentFixture<AdDaformFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDaformFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDaformFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
