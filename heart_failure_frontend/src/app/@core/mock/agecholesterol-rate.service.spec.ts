import { TestBed } from '@angular/core/testing';

import { AgecholesterolRateService } from './agecholesterol-rate.service';

describe('AgecholesterolRateService', () => {
  let service: AgecholesterolRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgecholesterolRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
