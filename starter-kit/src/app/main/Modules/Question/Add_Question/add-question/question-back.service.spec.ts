import { TestBed } from '@angular/core/testing';

import { QuestionBackService } from './question-back.service';

describe('QuestionBackService', () => {
  let service: QuestionBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
