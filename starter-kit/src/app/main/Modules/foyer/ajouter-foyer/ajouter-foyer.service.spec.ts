import { TestBed } from '@angular/core/testing';

import { AjouterFoyerService } from './ajouter-foyer.service';

describe('AjouterFoyerService', () => {
  let service: AjouterFoyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterFoyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
