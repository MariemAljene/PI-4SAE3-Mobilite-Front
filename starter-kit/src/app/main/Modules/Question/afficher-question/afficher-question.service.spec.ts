import { TestBed } from '@angular/core/testing';

import { AfficherQuestionService } from './afficher-question.service';

describe('AfficherQuestionService', () => {
  let service: AfficherQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
