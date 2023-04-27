import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Opportunity} from "../../../models/Opportunity";
import {Condidacy} from "../../../models/Condidacy";

@Injectable({
  providedIn: 'root'
})
export class CandidacyServiceService {

  usersUrl="http://localhost:8091/ExamenBlancTemplate/CandidacyManagement";
  constructor(private _http:HttpClient) { }

  getAllCandidacies(): Observable<Condidacy[]> {
    return this._http.get<Condidacy[]>(this.usersUrl+'/Condidacy/GetAllCondidacies');
  }
  getSCORS(): Observable<Condidacy[]> {
    return this._http.get<Condidacy[]>(this.usersUrl+'/Condidacy/GetAllCondidacies');

  }
  sendEmail(idOpportunity: any): Observable<any> {
    if (idOpportunity) {
      return this._http.post(this.usersUrl+`/Condidacy/sendSelectedCandidatesEmailsTest/${idOpportunity}`, {});
    } else {
      console.log("Veuillez sélectionner une opportunité avant d'envoyer l'email.");
      return of(null);
    }
  }

}
