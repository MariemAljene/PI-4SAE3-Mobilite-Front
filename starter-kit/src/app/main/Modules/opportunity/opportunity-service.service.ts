import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Opportunity} from "../../../models/Opportunity";
import {environment} from "../../../../environments/environment";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {catchError, map} from "rxjs/operators";
import {AuthenticationService} from "../../../auth/service";

@Injectable({
  providedIn: 'root'
})
export class OpportunityServiceService implements Resolve<any>{
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
      Promise.all([this.getAllOpportunities()]).then(() => {
        resolve();
      }, reject);
    });
  }
  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })}

  usersUrl="http://localhost:8082/ExamenBlancTemplate/OpportunityManagement/Opportunity\n";
  constructor(private _httpClient: HttpClient ,private http: HttpClient,private  AuthenticationService:AuthenticationService) {

  }
  getAllOpportunities(): Observable<Opportunity[]> {
    return this._httpClient.get<Opportunity[]>(this.api+'/Opportunity/Opportunity/GetAll',this.httpOptions);
  }
  public updateOpportunity(opportunity: any) {
    return this._httpClient.put(this.api + '/Update', opportunity);
  }
  public deleteOpportunity(id: any) {
    if (id === undefined) {
      return throwError("Invalid opportunity ID");
    }
    return this._httpClient.delete(this.api+"/Opportunity/Opportunity/Delete/"+ id,this.httpOptions);
  }
  generateQRCodeForOpportunity(idOpportunity: number): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.AuthenticationService.getToken()}`
    });
    return this.http.get(`${this.api}/Opportunity/generateQRCodeForOpportunity/${idOpportunity}`, {
      headers: headers,
      responseType: 'blob'
    });
  }
  getOpportunityById(id: number): Observable<Opportunity> {
    return  this._httpClient.get(this.api+'/Opportunity/Opportunity/GetById/' + id, { responseType: 'arraybuffer' })
        .pipe(map((response: ArrayBuffer) => {
          const opportunity = JSON.parse(new TextDecoder().decode(response));
          return opportunity as Opportunity;
        }));
  }


}
