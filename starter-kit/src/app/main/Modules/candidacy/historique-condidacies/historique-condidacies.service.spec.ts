import { TestBed } from '@angular/core/testing';

import { HistoriqueCondidaciesService } from './historique-condidacies.service';

describe('HistoriqueCondidaciesService', () => {
  let service: HistoriqueCondidaciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueCondidaciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
