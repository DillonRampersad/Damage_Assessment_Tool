import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaformEquViewComponent } from './daform-equ-view.component';

describe('DaformEquViewComponent', () => {
  let component: DaformEquViewComponent;
  let fixture: ComponentFixture<DaformEquViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaformEquViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaformEquViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
