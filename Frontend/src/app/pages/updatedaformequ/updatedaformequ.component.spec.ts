import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedaformequComponent } from './updatedaformequ.component';

describe('UpdatedaformequComponent', () => {
  let component: UpdatedaformequComponent;
  let fixture: ComponentFixture<UpdatedaformequComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedaformequComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedaformequComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
