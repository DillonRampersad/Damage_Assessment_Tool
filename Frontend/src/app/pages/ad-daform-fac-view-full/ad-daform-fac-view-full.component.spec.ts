import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDaformFacViewFullComponent } from './ad-daform-fac-view-full.component';

describe('AdDaformFacViewFullComponent', () => {
  let component: AdDaformFacViewFullComponent;
  let fixture: ComponentFixture<AdDaformFacViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDaformFacViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDaformFacViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
