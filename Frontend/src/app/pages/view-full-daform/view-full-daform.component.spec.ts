import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullDaformComponent } from './view-full-daform.component';

describe('ViewFullDaformComponent', () => {
  let component: ViewFullDaformComponent;
  let fixture: ComponentFixture<ViewFullDaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFullDaformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFullDaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
