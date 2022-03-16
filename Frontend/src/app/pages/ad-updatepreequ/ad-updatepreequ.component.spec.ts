import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUpdatepreequComponent } from './ad-updatepreequ.component';

describe('AdUpdatepreequComponent', () => {
  let component: AdUpdatepreequComponent;
  let fixture: ComponentFixture<AdUpdatepreequComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUpdatepreequComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUpdatepreequComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
