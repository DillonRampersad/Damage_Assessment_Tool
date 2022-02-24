import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaformEquComponent } from './daform-equ.component';

describe('DaformEquComponent', () => {
  let component: DaformEquComponent;
  let fixture: ComponentFixture<DaformEquComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaformEquComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaformEquComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
