import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEquViewFullComponent } from './pre-equ-view-full.component';

describe('PreEquViewFullComponent', () => {
  let component: PreEquViewFullComponent;
  let fixture: ComponentFixture<PreEquViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreEquViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreEquViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
