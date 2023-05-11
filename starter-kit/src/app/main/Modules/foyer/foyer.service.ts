import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {QuestionRep} from "../../../models/QuestionRep";
import {Foyer} from "../../../models/Foyer";
import {AuthenticationService} from "../../../auth/service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

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
      Promise.all([this.getAllFoyer()]).then(() => {
        resolve();
      }, reject);
    });
  }

  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })}

  usersUrl="http://localhost:8082/examen";
  constructor(private _httpClient: HttpClient ,private http: HttpClient,private  AuthenticationService:AuthenticationService) {

  }

  getAllFoyer(): Observable<Foyer[]> {
    return this._httpClient.get<Foyer[]>(this.usersUrl+'/Foyer/GetAllFoyer',this.httpOptions);
  }

  AjouterFoyer(data:any ){
    return this.http.post(this.usersUrl+'/Foyer/foyerAdd' , data)
    console.log("this data");
    console.log(data);
  }

  public deleteFoyer(id: any) {
    if (id === undefined) {
      return throwError("Invalid opportunity ID");
    }
    return this._httpClient.delete(this.usersUrl + '/Foyer/deletefoyer/' + id, this.httpOptions);
  }

  getCountryDetails(countryName: string): Observable<any> {
    const restCountryUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    return this._httpClient.get<any>(restCountryUrl);
  }




}
