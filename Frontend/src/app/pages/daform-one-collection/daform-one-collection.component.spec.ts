import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAFormOneCollectionComponent } from './daform-one-collection.component';

describe('DAFormOneCollectionComponent', () => {
  let component: DAFormOneCollectionComponent;
  let fixture: ComponentFixture<DAFormOneCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAFormOneCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAFormOneCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
