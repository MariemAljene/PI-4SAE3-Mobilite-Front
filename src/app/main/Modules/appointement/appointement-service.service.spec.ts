import { TestBed } from '@angular/core/testing';

import { AppointementServiceService } from './appointement-service.service';

describe('AppointementServiceService', () => {
  let service: AppointementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
