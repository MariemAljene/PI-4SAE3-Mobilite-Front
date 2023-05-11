import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Opportunity} from "../../../../models/Opportunity";
import {QuestionRep} from "../../../../models/QuestionRep";

@Injectable({
  providedIn: 'root'
})
export class AjoutQuestionReponseService {

  constructor(private _httpClient: HttpClient ,private http: HttpClient) {

  }
  private idHandel
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.idHandel = route.params.id;
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getAllQuestionRep()]).then(() => {
        resolve();
      }, reject);
    });
  }
  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })}

  getAllQuestionRep(): Observable<QuestionRep[]> {
    return this._httpClient.get<QuestionRep[]>('http://localhost:8082/examen/Question/GetAll',this.httpOptions);
  }

  private readonly baseUrl = 'http://localhost:8082/examen';
  private _refrD$ =new Subject;

  AjouterQuestionRep1(questionRep: QuestionRep): Observable<QuestionRep> {
    const url = `http://localhost:8082/examen/Question/AddQuestion`;
    return this.http.post<QuestionRep>(url, questionRep);

  }
  editQuestionRep(idQuestion:number,question:QuestionRep): Observable<QuestionRep[]> {
    return this._httpClient.put<QuestionRep[]>('http://localhost:8082/examen/Question/UpdateQuestion/',question);
  }
  private apiUrl = 'http://localhost:8082/examen/Question/AddQuestion';

  AjouterQuestionRep(questionRep: QuestionRep): Observable<QuestionRep> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
      })
    };
    return this.http.post<QuestionRep>(`${this.apiUrl}`, questionRep, httpOptions);
  }



}
