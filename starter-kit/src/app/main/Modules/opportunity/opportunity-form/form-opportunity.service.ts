import { Injectable } from '@angular/core';
import {Opportunity} from "../../../../models/Opportunity";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../../../environments/environment";

import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormOpportunityService {
  constructor(private _httpClient: HttpClient, private http: HttpClient) {

  }

  private idHandel

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.idHandel = route.params.id;
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getAllOpportunities()]).then(() => {
        resolve();
      }, reject);
    });
  }

  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }


  getAllOpportunities(): Observable<Opportunity[]> {
    return this._httpClient.get<Opportunity[]>(this.api + '/Opportunity/Opportunity/GetAll', this.httpOptions);
  }

  private readonly baseUrl = 'http://localhost:8092/ExamenBlancTemplate/OpportunityManagement/Opportunity';
  private _refrD$ = new Subject;

  createOpportunity(opportunity: Opportunity, idPartner: string): Observable<Opportunity> {
    const url = `http://localhost:8092/ExamenBlancTemplate/OpportunityManagement/Opportunity/CreateNewOpportunity/${idPartner}`;
    return this.http.post<Opportunity>(url, opportunity);

  }

  private apiUrl = 'http://localhost:8089/Opportunity/Opportunity/CreateNewOpportunity';


  createOpportunity1(opportunity: Opportunity,idPartner: string): Observable<Opportunity> {
    const url = `http://localhost:8082/Opportunity/Opportunity/CreateNewOpportunity/${idPartner}`;
    return this.http.post<Opportunity>(url, opportunity,this.httpOptions);
  }
}






