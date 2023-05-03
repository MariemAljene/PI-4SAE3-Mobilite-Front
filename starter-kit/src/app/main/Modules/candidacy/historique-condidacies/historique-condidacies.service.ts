import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Condidacy} from "../../../../models/Condidacy";

@Injectable({
  providedIn: 'root'
})
export class HistoriqueCondidaciesService implements Resolve<any> {

  private  idHandel
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
    })}

  constructor(private _http:HttpClient) { }

  getCandidacyHistory(userId: string): Observable<any> {
    return this._http.get<Condidacy[]>(this.api+`/Pi_Mobility/get-candidacy-history/${userId}`,this.httpOptions);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return undefined;
  }
}
