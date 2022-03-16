import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUpdatedaformfacComponent } from './ad-updatedaformfac.component';

describe('AdUpdatedaformfacComponent', () => {
  let component: AdUpdatedaformfacComponent;
  let fixture: ComponentFixture<AdUpdatedaformfacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUpdatedaformfacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUpdatedaformfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
