import { TestBed } from '@angular/core/testing';

import { CandidacyServiceService } from './candidacy-service.service';

describe('CandidacyServiceService', () => {
  let service: CandidacyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidacyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
