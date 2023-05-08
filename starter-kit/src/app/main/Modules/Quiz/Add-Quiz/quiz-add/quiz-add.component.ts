import { Component, OnInit } from '@angular/core';
import {QuizServiceService} from "./quiz-service.service";
import {AfficherQuestionService} from "../../../Question/afficher-question/afficher-question.service";
import {AuthenticationService} from "../../../../../auth/service";
import {Quiz} from "../../../../../models/Quiz";
import {Question} from "../../../../../models/Question";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.scss']
})
export class QuizAddComponent implements OnInit {

  constructor(private  QuizServiceService:QuizServiceService,private  AfficherQuestionService:AfficherQuestionService,private  AuthenticationService:AuthenticationService,private router: Router  ) { }


  ngOnInit() {
    this.AfficherQuestionService.getQuestion(this.AuthenticationService.currentUserValue.userName.toString()).subscribe(
        (questions) => {
          this.questions = questions;
        },
        (error) => {
          console.log(error);
        }
    );
  }

  onQuestionSelected(questionId: number, checked: boolean) {
    if (checked) {
      this.selectedQuestionIds.push(questionId);
    } else {
      const index = this.selectedQuestionIds.indexOf(questionId);
      if (index !== -1) {
        this.selectedQuestionIds.splice(index, 1);
      }
    }
  }
    quiz: Quiz = new Quiz();
    questions: Question[] = [];
    selectedQuestionIds: number[] = [];
  onSubmit() {
    this.QuizServiceService.ajouterQuiz(this.quiz, this.selectedQuestionIds, 10
    ).subscribe(
        () => {
          console.log('Quiz ajouté avec succès !');
          this.router.navigate(['/afficherQuiz']);

        },
        (error) => {
          console.log(error);
        }
    );
  }

}
