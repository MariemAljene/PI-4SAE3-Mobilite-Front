import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFrontComponent } from './question-front.component';

describe('QuestionFrontComponent', () => {
  let component: QuestionFrontComponent;
  let fixture: ComponentFixture<QuestionFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
