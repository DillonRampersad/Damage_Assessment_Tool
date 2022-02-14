import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDaformComponent } from './view-daform.component';

describe('ViewDaformComponent', () => {
  let component: ViewDaformComponent;
  let fixture: ComponentFixture<ViewDaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDaformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
