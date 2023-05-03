import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBackComponent } from './quiz-back.component';

describe('QuizBackComponent', () => {
  let component: QuizBackComponent;
  let fixture: ComponentFixture<QuizBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
