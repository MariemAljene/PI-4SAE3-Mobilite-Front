import { Component, OnInit } from '@angular/core';
import {OpportunityServiceService} from "../../opportunity/opportunity-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../../auth/service";
import {Question} from "../../../../models/Question";
import {AfficherQuestionService} from "./afficher-question.service";
import {Answers} from "../../../../models/Answers";

@Component({
  selector: 'app-afficher-question',
  templateUrl: './afficher-question.component.html',
  styleUrls: ['./afficher-question.component.scss']
})
export class AfficherQuestionComponent implements OnInit {
questions:Question[]
  question:Question
  answers:Answers
  constructor(private opportunityService: OpportunityServiceService,private  AfficherQuestionService:AfficherQuestionService,private  AuthenticationService:AuthenticationService ,private router: Router, private _http: HttpClient) {
  }nbPages: number = 0;

    ngOnInit(): void {
        this.AfficherQuestionService.getQuestion(this.AuthenticationService.currentUserValue.userName.toString()).subscribe(
            (questions: Question[]) => {
                this.questions = questions;
            },
            (error: any) => console.log(error)
        );
    }


}


