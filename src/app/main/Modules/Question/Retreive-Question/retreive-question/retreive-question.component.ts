import { Component, OnInit } from '@angular/core';
import {Question} from "../../../../../models/Question";
import {RetreiveQuestionService} from "../retreive-question.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-retreive-question',
  templateUrl: './retreive-question.component.html',
  styleUrls: ['./retreive-question.component.scss']
})
export class RetreiveQuestionComponent implements OnInit {
question :Question;
questions:Question[];
  constructor(private retreiveQuestionService :RetreiveQuestionService ,private router: Router, private _http: HttpClient) { }

  ngOnInit(): void {
    const idUser = 'mariem'; // Replace this with the appropriate partner ID
    this.retreiveQuestionService.getAllQuestions( idUser)

  }
  }
