import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASignupComponent } from './a-signup.component';

describe('ASignupComponent', () => {
  let component: ASignupComponent;
  let fixture: ComponentFixture<ASignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
