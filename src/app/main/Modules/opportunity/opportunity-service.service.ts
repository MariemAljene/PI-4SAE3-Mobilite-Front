import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Opportunity} from "../../../models/Opportunity";

@Injectable({
  providedIn: 'root'
})
export class OpportunityServiceService {

  usersUrl="http://localhost:8091/ExamenBlancTemplate/OpportunityManagement/Opportunity\n";
  constructor(private _http:HttpClient) { }

  getAllOpportunities(): Observable<Opportunity[]> {
    return this._http.get<Opportunity[]>(this.usersUrl+'/GetAll');
  }
  public updateOpportunity(id: any) {
    return this._http.put(this.usersUrl + '/updateOpportunity/' + id, id);
  }
  public deleteOpportunity(id: number) {
    if (id === undefined) {
      return throwError("Invalid opportunity ID");
    }
    return this._http.delete("http://localhost:8091/ExamenBlancTemplate/OpportunityManagement/Opportunity/Delete/"+ id);
  }




}
