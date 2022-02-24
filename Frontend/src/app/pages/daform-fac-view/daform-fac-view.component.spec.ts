import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaformFacViewComponent } from './daform-fac-view.component';

describe('DaformFacViewComponent', () => {
  let component: DaformFacViewComponent;
  let fixture: ComponentFixture<DaformFacViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaformFacViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaformFacViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
