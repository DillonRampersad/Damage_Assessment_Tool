import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDaformComponent } from './detailed-daform.component';

describe('DetailedDaformComponent', () => {
  let component: DetailedDaformComponent;
  let fixture: ComponentFixture<DetailedDaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedDaformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedDaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
