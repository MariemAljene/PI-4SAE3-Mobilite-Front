import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReponseComponent } from './question-reponse.component';

describe('QuestionReponseComponent', () => {
  let component: QuestionReponseComponent;
  let fixture: ComponentFixture<QuestionReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
