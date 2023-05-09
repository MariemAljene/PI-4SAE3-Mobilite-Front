import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Opportunity} from "../../../models/Opportunity";
import {Condidacy} from "../../../models/Condidacy";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {Quiz} from "../../../models/Quiz";
import {catchError} from "rxjs/operators";

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
      return this._http.post(this.api+`/Pi_Mobility/Condidacy/sendSelectedCandidatesEmailsTest/${idOpportunity}`, {},this.httpOptions);
    } else {
      console.log("Veuillez sélectionner une opportunité avant d'envoyer l'email.");
      return of(null);
    }
  }
  createCandidate( candidate: Condidacy, idStudent: string,id_Opportunity: number): Observable<Condidacy> {
    console.log(id_Opportunity);
    return this._http.post<Condidacy>(this.api+`/Pi_Mobility/Condidacy/CreateNew/${idStudent}/${id_Opportunity}`,candidate,this.httpOptions);
  }
  retrieveCandidaciesByCode(code: string): Observable<any[]> {
    if (code) {

      return this._http.get<Opportunity[]>(this.api+`/Pi_Mobility/RetreiveCandidacyOppParCode/${code}`, this.httpOptions);
    }
    else   {
      console.log("Veuillez sélectionner une opportunité avant d'envoyer l'email.");
      return of(null);
    }
  }
  public updateCondidacy(id_Condidacy:any,condidacy:Condidacy):Observable<any> {
    console.log(id_Condidacy);
    return this._http.put(this.api +'/Pi_Mobility/Condidacy/UpdateCon/'+id_Condidacy,condidacy, this.httpOptions)
        .pipe(
            catchError((error: any) => {
              console.log('Error occurred:', error);
              return throwError(error);
            })
        );
  }



}
