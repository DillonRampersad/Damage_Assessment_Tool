import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaformFacViewFullComponent } from './daform-fac-view-full.component';

describe('DaformFacViewFullComponent', () => {
  let component: DaformFacViewFullComponent;
  let fixture: ComponentFixture<DaformFacViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaformFacViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaformFacViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
