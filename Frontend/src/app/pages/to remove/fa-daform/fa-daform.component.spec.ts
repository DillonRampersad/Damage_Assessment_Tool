import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FADAFormComponent } from './fa-daform.component';

describe('FADAFormComponent', () => {
  let component: FADAFormComponent;
  let fixture: ComponentFixture<FADAFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FADAFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FADAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
