import { TestBed } from '@angular/core/testing';

import { FormOpportunityService } from './form-opportunity.service';

describe('FormOpportunityService', () => {
  let service: FormOpportunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOpportunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
