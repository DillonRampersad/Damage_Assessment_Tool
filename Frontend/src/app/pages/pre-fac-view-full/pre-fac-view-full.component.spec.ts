import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFacViewFullComponent } from './pre-fac-view-full.component';

describe('PreFacViewFullComponent', () => {
  let component: PreFacViewFullComponent;
  let fixture: ComponentFixture<PreFacViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreFacViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreFacViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
