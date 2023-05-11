import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterQuestionReponseComponent } from './ajouter-question-reponse.component';

describe('AjouterQuestionReponseComponent', () => {
  let component: AjouterQuestionReponseComponent;
  let fixture: ComponentFixture<AjouterQuestionReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterQuestionReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterQuestionReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
