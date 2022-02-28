import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASigninComponent } from './a-signin.component';

describe('ASigninComponent', () => {
  let component: ASigninComponent;
  let fixture: ComponentFixture<ASigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
