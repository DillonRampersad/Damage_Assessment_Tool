import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaformEquViewFullComponent } from './daform-equ-view-full.component';

describe('DaformEquViewFullComponent', () => {
  let component: DaformEquViewFullComponent;
  let fixture: ComponentFixture<DaformEquViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaformEquViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaformEquViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
