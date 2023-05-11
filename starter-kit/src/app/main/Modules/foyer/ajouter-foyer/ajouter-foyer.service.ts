import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {QuestionRep} from "../../../../models/QuestionRep";
import {Foyer} from "../../../../models/Foyer";

@Injectable({
  providedIn: 'root'
})
export class AjouterFoyerService {

  constructor(private _httpClient: HttpClient ,private http: HttpClient) {

  }
  private idHandel
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
  getAllFoyer(): Observable<Foyer[]> {
    return this._httpClient.get<Foyer[]>('http://localhost:8082/examen/Foyer/GetAllFoyer',this.httpOptions);
  }
  private readonly baseUrl = 'http://localhost:8082/examen';
  private _refrD$ =new Subject;

  AjouterFoyer1(foyer: Foyer): Observable<Foyer> {
    const url = `http://localhost:8082/examen/Foyer/foyerAdd`;
    return this.http.post<Foyer>(url, foyer);

  }
  private apiUrl ='http://localhost:8082/examen/Foyer/foyerAdd' ;

  AjouterFoyer(foyer: Foyer): Observable<Foyer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
      })
    };
    return this.http.post<Foyer>(`${this.apiUrl}`, foyer, httpOptions);
  }
}
