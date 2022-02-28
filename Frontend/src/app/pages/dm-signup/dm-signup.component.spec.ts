import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmSignupComponent } from './dm-signup.component';

describe('DmSignupComponent', () => {
  let component: DmSignupComponent;
  let fixture: ComponentFixture<DmSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
