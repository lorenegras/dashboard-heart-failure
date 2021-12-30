import { TestBed } from '@angular/core/testing';

import { SexbloodpressureService } from './sexbloodpressure.service';

describe('SexbloodpressureService', () => {
  let service: SexbloodpressureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SexbloodpressureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
