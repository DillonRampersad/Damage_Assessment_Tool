import { TestBed } from '@angular/core/testing';

import { MocMapService } from './moc-map.service';

describe('MocMapService', () => {
  let service: MocMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
