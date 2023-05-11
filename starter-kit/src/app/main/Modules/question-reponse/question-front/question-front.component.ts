import { Component, OnInit } from '@angular/core';
import {QuestionReponseService} from "../question-reponse.service";
import {QuestionRep} from "../../../../models/QuestionRep";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-question-front',
  templateUrl: './question-front.component.html',
  styleUrls: ['./question-front.component.scss']
})
export class QuestionFrontComponent implements OnInit {

  questionReps: QuestionRep[];
  questionRep: QuestionRep
  p=1;
  constructor( private questionReponseService:QuestionReponseService, private router: Router, private _http: HttpClient) { }

  ngOnInit(): void {
    this.questionReponseService.getAllQuestionRep().subscribe(res => {
      this.questionReps = res;
      console.log(this.questionReps);



    });
    this.p=1;
  }
  searchText :string='';

  onSearchTextEntred(searchValue: string){
    this.searchText=searchValue;
  }

}
