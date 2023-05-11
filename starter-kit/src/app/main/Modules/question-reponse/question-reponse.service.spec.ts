import { TestBed } from '@angular/core/testing';

import { QuestionReponseService } from './question-reponse.service';

describe('QuestionReponseService', () => {
  let service: QuestionReponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionReponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
