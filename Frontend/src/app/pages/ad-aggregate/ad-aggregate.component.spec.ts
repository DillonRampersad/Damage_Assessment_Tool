import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAggregateComponent } from './ad-aggregate.component';

describe('AdAggregateComponent', () => {
  let component: AdAggregateComponent;
  let fixture: ComponentFixture<AdAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
