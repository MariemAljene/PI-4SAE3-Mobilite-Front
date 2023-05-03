import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../../../auth/service";
import {Opportunity} from "../../../../../models/Opportunity";
import {Question} from "../../../../../models/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionBackService  implements  Resolve<any>{
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

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return undefined;
  }
  createOpportunity(question: Question, Id_user: string): Observable<Opportunity> {
    const url = `${this.api}/Pi_Mobility/Quiz/question/${Id_user}`;
    return this.http.post<any>(url, question,this.httpOptions);

  }
}
