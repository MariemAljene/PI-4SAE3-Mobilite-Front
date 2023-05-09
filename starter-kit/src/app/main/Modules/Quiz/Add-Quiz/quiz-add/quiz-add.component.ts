import { Component, OnInit } from '@angular/core';
import {QuizServiceService} from "./quiz-service.service";
import {AfficherQuestionService} from "../../../Question/afficher-question/afficher-question.service";
import {AuthenticationService} from "../../../../../auth/service";
import {Quiz} from "../../../../../models/Quiz";
import {Question} from "../../../../../models/Question";
import {Router} from "@angular/router";
import {Opportunity} from "../../../../../models/Opportunity";

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.scss']
})
export class QuizAddComponent implements OnInit {

  constructor(private  QuizServiceService:QuizServiceService,private  AfficherQuestionService:AfficherQuestionService,private  AuthenticationService:AuthenticationService,private router: Router  ) { }
opportunities:Opportunity[]

    ngOnInit() {
        console.log(this.AuthenticationService.currentUserValue.userName); // log the userName value
        this.AfficherQuestionService.getQuestion(this.AuthenticationService.currentUserValue.userName.toString()).subscribe(
            (questions) => {
                this.questions = questions;
            },
            (error) => {
                console.log(error);
            }
        );

        this.QuizServiceService.getOpportunitiesForCurrentUser(this.AuthenticationService.currentUserValue.userName).subscribe(
            (opportunities) => {
                this.opportunities = opportunities;
            },
            (error) => {
                console.log(error);
            }
        );
    }


    onQuestionSelected(questionId: number, checked: boolean) {
        let isChecked: boolean = checked;
        if (isChecked) {
            this.selectedQuestionIds.push(questionId);
        } else {
            const index = this.selectedQuestionIds.indexOf(questionId);
            if (index !== -1) {
                this.selectedQuestionIds.splice(index, 1);
            }
        }
    }

    checked: boolean = false;

    selectedOpportunityId:number
    onOpportunitySelected(id_Opportunity: number) {
        if (id_Opportunity !== undefined) {
            this.selectedOpportunityId = id_Opportunity;
            console.log('selectedOpportunityId:', this.selectedOpportunityId);
        } else {
            console.log('Opportunity is not selected');
        }
    }



    quiz: Quiz = new Quiz();
    questions: Question[] = [];
    selectedQuestionIds: number[] = [];
    onSubmit() {
        if (!this.selectedOpportunityId) {
            console.log('Opportunity is not selected');
            return;
        }
        this.QuizServiceService.ajouterQuiz(this.quiz, this.selectedQuestionIds, this.selectedOpportunityId).subscribe(
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
