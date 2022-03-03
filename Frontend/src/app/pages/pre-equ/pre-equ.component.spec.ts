import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEquComponent } from './pre-equ.component';

describe('PreEquComponent', () => {
  let component: PreEquComponent;
  let fixture: ComponentFixture<PreEquComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreEquComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreEquComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
