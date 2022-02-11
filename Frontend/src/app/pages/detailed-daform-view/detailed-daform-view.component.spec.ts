import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDaformViewComponent } from './detailed-daform-view.component';

describe('DetailedDaformViewComponent', () => {
  let component: DetailedDaformViewComponent;
  let fixture: ComponentFixture<DetailedDaformViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedDaformViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedDaformViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
