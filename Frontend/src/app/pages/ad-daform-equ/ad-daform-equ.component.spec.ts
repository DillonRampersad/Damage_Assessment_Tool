import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDaformEquComponent } from './ad-daform-equ.component';

describe('AdDaformEquComponent', () => {
  let component: AdDaformEquComponent;
  let fixture: ComponentFixture<AdDaformEquComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDaformEquComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDaformEquComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
