import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreEquViewFullComponent } from './ad-pre-equ-view-full.component';

describe('AdPreEquViewFullComponent', () => {
  let component: AdPreEquViewFullComponent;
  let fixture: ComponentFixture<AdPreEquViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPreEquViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreEquViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
