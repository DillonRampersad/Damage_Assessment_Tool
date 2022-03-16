import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreEquComponent } from './ad-pre-equ.component';

describe('AdPreEquComponent', () => {
  let component: AdPreEquComponent;
  let fixture: ComponentFixture<AdPreEquComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPreEquComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreEquComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
