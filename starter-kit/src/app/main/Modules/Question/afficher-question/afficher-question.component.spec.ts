import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherQuestionComponent } from './afficher-question.component';

describe('AfficherQuestionComponent', () => {
  let component: AfficherQuestionComponent;
  let fixture: ComponentFixture<AfficherQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
