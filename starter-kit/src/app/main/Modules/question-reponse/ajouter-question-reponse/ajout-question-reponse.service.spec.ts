import { TestBed } from '@angular/core/testing';

import { AjoutQuestionReponseService } from './ajout-question-reponse.service';

describe('AjoutQuestionReponseService', () => {
  let service: AjoutQuestionReponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutQuestionReponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
