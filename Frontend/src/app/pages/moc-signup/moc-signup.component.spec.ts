import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocSignupComponent } from './moc-signup.component';

describe('MocSignupComponent', () => {
  let component: MocSignupComponent;
  let fixture: ComponentFixture<MocSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
