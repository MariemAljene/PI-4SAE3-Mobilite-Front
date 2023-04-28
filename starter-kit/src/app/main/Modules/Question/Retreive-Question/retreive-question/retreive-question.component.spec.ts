import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreiveQuestionComponent } from './retreive-question.component';

describe('RetreiveQuestionComponent', () => {
  let component: RetreiveQuestionComponent;
  let fixture: ComponentFixture<RetreiveQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetreiveQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetreiveQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
