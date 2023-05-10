import { TestBed } from '@angular/core/testing';

import { SpecialityChartService } from './speciality-chart.service';

describe('SpecialityChartService', () => {
  let service: SpecialityChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialityChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
