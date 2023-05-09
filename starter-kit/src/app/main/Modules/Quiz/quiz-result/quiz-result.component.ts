import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuizServiceService} from "../Add-Quiz/quiz-add/quiz-service.service";
import {AfficherQuestionService} from "../../Question/afficher-question/afficher-question.service";
import {User} from "../../../../auth/models";
import {Subscription} from "rxjs";
import {Condidacy} from "../../../../models/Condidacy";
import {CandidacyServiceService} from "../../candidacy/candidacy-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private  QuizServiceService:QuizServiceService,private  candidacyServiceService:CandidacyServiceService,private  AfficherQuestionService:AfficherQuestionService,private router: Router  ) {
    this.form = this.formBuilder.group({
      quizResult:['', Validators.required],



    });
  }
  form:FormGroup;

  // @ts-ignore
  code: string
  condidacy :Condidacy
  Condidacies :Condidacy[]
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.candidacyServiceService.retrieveCandidaciesByCode(this.code).subscribe(
        (students: User[]) => {
          // Do something with the returned students
        },
        (error) => {
          console.log(error);
        }
    );
  }
  retrieveCandidaciesByCode() {
    if (this.code) {
      this.candidacyServiceService.retrieveCandidaciesByCode(this.code)
          .subscribe(
              candidacies => this.Condidacies = candidacies,
              error => console.error(error)
          );
    } else {
      console.log("Veuillez entrer un code avant de récupérer les candidatures.");
    }
  }

  updateCandidacy(id_Condidacy:any, candidacy: any) {
    this.candidacyServiceService.updateCondidacy(id_Condidacy,candidacy).subscribe(
        res => {
          // handle success
        },
        err => {
          // handle error
        }
    );
  }
}



