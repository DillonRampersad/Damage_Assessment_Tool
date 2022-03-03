import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFacViewComponent } from './pre-fac-view.component';

describe('PreFacViewComponent', () => {
  let component: PreFacViewComponent;
  let fixture: ComponentFixture<PreFacViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreFacViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreFacViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
