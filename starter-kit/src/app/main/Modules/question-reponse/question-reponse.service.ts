import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Opportunity} from "../../../models/Opportunity";
import {map} from "rxjs/operators";
import {QuestionRep} from "../../../models/QuestionRep";
import {AuthenticationService} from "../../../auth/service";
import {ReponseQues} from "../../../models/ReponseQues";

@Injectable({
  providedIn: 'root'
})
export class QuestionReponseService  {

  private  idHandel
  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
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

  usersUrl="http://localhost:8082/examen";
  constructor(private _httpClient: HttpClient ,private http: HttpClient,private  AuthenticationService:AuthenticationService) {

  }

  getAllQuestionRep(): Observable<QuestionRep[]> {
    return this._httpClient.get<QuestionRep[]>(this.usersUrl+'/Question/GetAll',this.httpOptions);
  }



  public deleteQuestion(idQuestion: any) {
    if (idQuestion === undefined) {
      return throwError("Invalid opportunity ID");
    }
    return this._httpClient.delete(this.usersUrl + '/Question/DeleteQuestion/' + idQuestion, this.httpOptions);
  }


  getQuestionById(idQuestion:any):Observable<QuestionRep>{
    return this._httpClient.get<QuestionRep>('${this.usersUrl}/Question/getQuestionById/${idQuestion}',this.httpOptions)

  }














}
