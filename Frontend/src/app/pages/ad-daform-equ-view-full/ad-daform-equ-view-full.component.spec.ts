import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDaformEquViewFullComponent } from './ad-daform-equ-view-full.component';

describe('AdDaformEquViewFullComponent', () => {
  let component: AdDaformEquViewFullComponent;
  let fixture: ComponentFixture<AdDaformEquViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDaformEquViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDaformEquViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
