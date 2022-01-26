import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FASearchComponent } from './fa-search.component';

describe('FASearchComponent', () => {
  let component: FASearchComponent;
  let fixture: ComponentFixture<FASearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FASearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FASearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
