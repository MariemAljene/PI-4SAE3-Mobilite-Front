import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Opportunity} from "../../../../models/Opportunity";


@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private readonly baseUrl = 'http://localhost:8091/ExamenBlancTemplate/OpportunityManagement/Opportunity';

  constructor(private http: HttpClient) { }

  createOpportunity(opportunity: Opportunity, idPartner: string): Observable<Opportunity> {
    const url = `http://localhost:8091/ExamenBlancTemplate/OpportunityManagement/Opportunity/CreateNewOpportunity/${idPartner}`;
    return this.http.post<Opportunity>(url, opportunity);
  }



}
