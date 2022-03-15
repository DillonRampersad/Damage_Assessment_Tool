import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepreequComponent } from './updatepreequ.component';

describe('UpdatepreequComponent', () => {
  let component: UpdatepreequComponent;
  let fixture: ComponentFixture<UpdatepreequComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepreequComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepreequComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
