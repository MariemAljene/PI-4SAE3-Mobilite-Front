import { TestBed } from '@angular/core/testing';

import { AjouterReclamationService } from './ajouter-reclamation.service';

describe('AjouterReclamationService', () => {
  let service: AjouterReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterReclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
