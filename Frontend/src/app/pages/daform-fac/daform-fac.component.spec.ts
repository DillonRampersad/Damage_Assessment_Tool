import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaformFacComponent } from './daform-fac.component';

describe('DaformFacComponent', () => {
  let component: DaformFacComponent;
  let fixture: ComponentFixture<DaformFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaformFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaformFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
