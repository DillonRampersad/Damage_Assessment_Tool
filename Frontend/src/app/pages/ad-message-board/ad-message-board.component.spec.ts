import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMessageBoardComponent } from './ad-message-board.component';

describe('AdMessageBoardComponent', () => {
  let component: AdMessageBoardComponent;
  let fixture: ComponentFixture<AdMessageBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMessageBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMessageBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
