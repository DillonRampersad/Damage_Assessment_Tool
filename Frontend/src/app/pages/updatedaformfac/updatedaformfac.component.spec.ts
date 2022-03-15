import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedaformfacComponent } from './updatedaformfac.component';

describe('UpdatedaformfacComponent', () => {
  let component: UpdatedaformfacComponent;
  let fixture: ComponentFixture<UpdatedaformfacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedaformfacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedaformfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
