import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmSigninComponent } from './dm-signin.component';

describe('DmSigninComponent', () => {
  let component: DmSigninComponent;
  let fixture: ComponentFixture<DmSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
