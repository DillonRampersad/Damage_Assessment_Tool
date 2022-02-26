import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaSigninComponent } from './fa-signin.component';

describe('FaSigninComponent', () => {
  let component: FaSigninComponent;
  let fixture: ComponentFixture<FaSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
