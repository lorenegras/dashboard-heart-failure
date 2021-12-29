import { TestBed } from '@angular/core/testing';

import { AgeheartdiseaseService } from './ageheartdisease.service';

describe('AgeheartdiseaseService', () => {
  let service: AgeheartdiseaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeheartdiseaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
