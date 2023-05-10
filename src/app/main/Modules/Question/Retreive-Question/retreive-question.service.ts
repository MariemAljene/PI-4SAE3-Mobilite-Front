import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Condidacy} from "../../../../models/Condidacy";
import {Question} from "../../../../models/Question";

@Injectable({
  providedIn: 'root'
})
export class RetreiveQuestionService {

  usersUrl="http://localhost:8091/ExamenBlancTemplate/CandidacyManagement";
  constructor(private _http:HttpClient) { }

  getAllQuestions(idUser:any): Observable<Question[]> {
    return this._http.get<Question[]>('http://localhost:8091/ExamenBlancTemplate/QuizManagement/Question/GetAll'+ idUser)
  ;
  }
}
