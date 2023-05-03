import { Component, OnInit } from '@angular/core';
import {OpportunityServiceService} from "../../opportunity/opportunity-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../../auth/service";

@Component({
  selector: 'app-quiz-back',
  templateUrl: './quiz-back.component.html',
  styleUrls: ['./quiz-back.component.scss']
})
export class QuizBackComponent implements OnInit {

  constructor(private opportunityService: OpportunityServiceService,private  AuthenticationService:AuthenticationService ,private router: Router, private _http: HttpClient) {
  }
  ngOnInit(): void {
    if(this.AuthenticationService.currentUserValue.role[0].roleName=="Admin" )
    {

      this.addQuestion = () => {
        this.router.navigate(['/add-question']);
      }
      this.addQuiz = () => {
        this.router.navigate(['/add-quiz']);
      }
      this.viewNotes = () => {
        this.router.navigate(['/view-notes']);
      }

    }      else              if(this.AuthenticationService.currentUserValue.role[0].roleName=="User" )
    {
      this.router.navigate(['/OpportunityList']);

    }
  }
  addQuestion() {
    // Méthode pour ajouter une question
  }

  addQuiz() {
    // Méthode pour ajouter un quiz
  }

  viewNotes() {
    // Méthode pour voir les notes
  }

}
