import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDaformFacViewComponent } from './ad-daform-fac-view.component';

describe('AdDaformFacViewComponent', () => {
  let component: AdDaformFacViewComponent;
  let fixture: ComponentFixture<AdDaformFacViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDaformFacViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDaformFacViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
