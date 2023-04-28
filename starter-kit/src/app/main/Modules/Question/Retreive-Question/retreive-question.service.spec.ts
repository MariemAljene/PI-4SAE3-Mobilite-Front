import { TestBed } from '@angular/core/testing';

import { RetreiveQuestionService } from './retreive-question.service';

describe('RetreiveQuestionService', () => {
  let service: RetreiveQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetreiveQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
