import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTwitterComponent } from './ad-twitter.component';

describe('AdTwitterComponent', () => {
  let component: AdTwitterComponent;
  let fixture: ComponentFixture<AdTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
