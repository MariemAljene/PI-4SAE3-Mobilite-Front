import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "../../../../auth/service";
import {Observable} from "rxjs";
import {Opportunity} from "../../../../models/Opportunity";
import {Question} from "../../../../models/Question";

@Injectable({
  providedIn: 'root'
})
export class AfficherQuestionService  implements  Resolve<any>  {
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
  getQuestion(id_User: string): Observable<Question[]> {
    return this._httpClient.get<Question[]>(`${this.api}/Pi_Mobility/Retreive_Questions/${id_User}`, this.httpOptions);
  }


}
