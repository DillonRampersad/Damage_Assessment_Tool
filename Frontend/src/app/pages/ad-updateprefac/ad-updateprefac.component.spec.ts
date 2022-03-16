import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUpdateprefacComponent } from './ad-updateprefac.component';

describe('AdUpdateprefacComponent', () => {
  let component: AdUpdateprefacComponent;
  let fixture: ComponentFixture<AdUpdateprefacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUpdateprefacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUpdateprefacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
