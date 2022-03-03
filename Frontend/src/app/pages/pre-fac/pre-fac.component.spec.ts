import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFacComponent } from './pre-fac.component';

describe('PreFacComponent', () => {
  let component: PreFacComponent;
  let fixture: ComponentFixture<PreFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
