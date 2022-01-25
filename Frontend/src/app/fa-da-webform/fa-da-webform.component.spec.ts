import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaDaWebformComponent } from './fa-da-webform.component';

describe('FaDaWebformComponent', () => {
  let component: FaDaWebformComponent;
  let fixture: ComponentFixture<FaDaWebformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaDaWebformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaDaWebformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
