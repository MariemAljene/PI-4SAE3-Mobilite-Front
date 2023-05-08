import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreiveQuizezComponent } from './retreive-quizez.component';

describe('RetreiveQuizezComponent', () => {
  let component: RetreiveQuizezComponent;
  let fixture: ComponentFixture<RetreiveQuizezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetreiveQuizezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetreiveQuizezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
