import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUpdateMocComponent } from './ad-update-moc.component';

describe('AdUpdateMocComponent', () => {
  let component: AdUpdateMocComponent;
  let fixture: ComponentFixture<AdUpdateMocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUpdateMocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUpdateMocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
