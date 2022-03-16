import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUpdatedaformequComponent } from './ad-updatedaformequ.component';

describe('AdUpdatedaformequComponent', () => {
  let component: AdUpdatedaformequComponent;
  let fixture: ComponentFixture<AdUpdatedaformequComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUpdatedaformequComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUpdatedaformequComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
