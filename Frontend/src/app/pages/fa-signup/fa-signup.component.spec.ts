import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaSignupComponent } from './fa-signup.component';

describe('FaSignupComponent', () => {
  let component: FaSignupComponent;
  let fixture: ComponentFixture<FaSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
