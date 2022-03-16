import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreEquViewComponent } from './ad-pre-equ-view.component';

describe('AdPreEquViewComponent', () => {
  let component: AdPreEquViewComponent;
  let fixture: ComponentFixture<AdPreEquViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPreEquViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreEquViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
