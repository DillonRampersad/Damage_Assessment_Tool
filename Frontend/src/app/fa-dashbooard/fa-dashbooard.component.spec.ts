import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FADashbooardComponent } from './fa-dashbooard.component';

describe('FADashbooardComponent', () => {
  let component: FADashbooardComponent;
  let fixture: ComponentFixture<FADashbooardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FADashbooardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FADashbooardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
