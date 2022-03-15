import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprefacComponent } from './updateprefac.component';

describe('UpdateprefacComponent', () => {
  let component: UpdateprefacComponent;
  let fixture: ComponentFixture<UpdateprefacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprefacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprefacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
