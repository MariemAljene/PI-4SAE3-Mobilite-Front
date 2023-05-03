import { Injectable } from '@angular/core';
import {Quiz} from "../../../../../models/Quiz";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../../../auth/service";

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService implements  Resolve<any>  {

  private idHandel

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */


  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }

  constructor(private _httpClient: HttpClient, private http: HttpClient, private AuthenticationService: AuthenticationService) { }

  ajouterQuiz(quiz: Quiz, questionIds: number[], Id_Opportunity: number): Observable<any> {
    return this._httpClient.post<any>(`${this.api}/Pi_Mobility/Quiz/AddQuizQuestionAndResponse/${questionIds}/${Id_Opportunity}`, quiz, this.httpOptions);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return undefined;
  }
}
