import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocSigninComponent } from './moc-signin.component';

describe('MocSigninComponent', () => {
  let component: MocSigninComponent;
  let fixture: ComponentFixture<MocSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
