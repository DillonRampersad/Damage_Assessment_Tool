import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDaformEquViewComponent } from './ad-daform-equ-view.component';

describe('AdDaformEquViewComponent', () => {
  let component: AdDaformEquViewComponent;
  let fixture: ComponentFixture<AdDaformEquViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDaformEquViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDaformEquViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
