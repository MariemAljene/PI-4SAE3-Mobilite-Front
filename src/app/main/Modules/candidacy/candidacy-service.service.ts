import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Opportunity} from "../../../models/Opportunity";
import {Condidacy} from "../../../models/Condidacy";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CandidacyServiceService implements Resolve<any>{
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
      Promise.all([this.getAllCandidacies()]).then(() => {
        resolve();
      }, reject);
    });
  }
  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })}

  constructor(private _http:HttpClient) { }

  getAllCandidacies(): Observable<Condidacy[]> {
    return this._http.get<Condidacy[]>(this.api+'/Pi_Mobility/Condidacy/GetAllCondidacies',this.httpOptions);
  }
  getSCORS(): Observable<Condidacy[]> {
    return this._http.get<Condidacy[]>(this.api+'/Condidacy/GetAllCondidacies');

  }
  sendEmail(idOpportunity: any): Observable<any> {
    if (idOpportunity) {
      return this._http.post(this.api+`/Condidacy/sendSelectedCandidatesEmailsTest/${idOpportunity}`, {});
    } else {
      console.log("Veuillez sélectionner une opportunité avant d'envoyer l'email.");
      return of(null);
    }
  }
  retrieveCandidaciesByCode(code: string): Observable<any[]> {
    return this._http.get<Opportunity[]>(this.api+'/Pi_Mobility/RetreiveCandidacyOppParCode/${code}',this.httpOptions);

  }


}
