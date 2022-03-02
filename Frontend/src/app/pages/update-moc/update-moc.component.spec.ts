import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMocComponent } from './update-moc.component';

describe('UpdateMocComponent', () => {
  let component: UpdateMocComponent;
  let fixture: ComponentFixture<UpdateMocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
