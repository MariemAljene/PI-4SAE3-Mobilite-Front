import { Injectable } from '@angular/core';
import {Quiz} from "../../../../../models/Quiz";
import {Observable, of} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../../../auth/service";
import {map} from "rxjs/operators";
import {Condidacy} from "../../../../../models/Condidacy";
import {Opportunity} from "../../../../../models/Opportunity";
import {User} from "../../../../../auth/models";

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService implements  Resolve<any> {

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

  constructor(private _httpClient: HttpClient, private http: HttpClient, private AuthenticationService: AuthenticationService) {
  }

  ajouterQuiz(quiz: Quiz, questionIds: number[], Id_Opportunity: number): Observable<any> {
    return this._httpClient.post<any>(`${this.api}/Pi_Mobility/Quiz/AddQuizQuestionAndResponse/${questionIds}/${Id_Opportunity}`, quiz, this.httpOptions);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return undefined;
  }

  getQuizzes(id: string): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.api + `/Pi_Mobility/Quiz/GetQuizById/${id}`, this.httpOptions);


  }

  getNbPagesAImprimer(idQuiz: number): Observable<number> {
    return this.http.get<number>(`${this.api}/Pi_Mobility/Quiz/GetnbFeuillesAImprimer/${idQuiz}`, this.httpOptions);
  }

  getOpportunitiesForCurrentUser(id_User: String): Observable<Opportunity[]> {

    return this.http.get<Opportunity[]>(`${this.api}/Pi_Mobility/RetreiveOpportunityByUser/${id_User}`, this.httpOptions);
  }
}
