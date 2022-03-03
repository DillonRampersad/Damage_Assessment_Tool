import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEquViewComponent } from './pre-equ-view.component';

describe('PreEquViewComponent', () => {
  let component: PreEquViewComponent;
  let fixture: ComponentFixture<PreEquViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreEquViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreEquViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
