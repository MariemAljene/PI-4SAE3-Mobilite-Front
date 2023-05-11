import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {QuestionRep} from "../../../models/QuestionRep";
import {Reclamation} from "../../../models/Reclamation";
import {AuthenticationService} from "../../../auth/service";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {



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
      Promise.all([this.getAllReclamation()]).then(() => {
        resolve();
      }, reject);
    });
  }
  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
      'Content-Type': 'application/json'
    })}
  usersUrl="http://localhost:8082/examen";
  constructor(private _httpClient: HttpClient ,private http: HttpClient,private  AuthenticationService:AuthenticationService) { }

  getAllReclamation(): Observable<Reclamation[]> {
    return this._httpClient.get<Reclamation[]>(this.usersUrl+'/Reclamation/getAllReclamation',this.httpOptions);
  }

  ajouterReclamation1(reclamation :Reclamation , userName : string):Observable<Reclamation>{
    return this._httpClient.post<Reclamation>(this.usersUrl+'/Reclamation/AddReclamation/${userName}',Reclamation,this.httpOptions)
  }
  ajouterReclamation(reclamation : Reclamation, userName:string): Observable<Reclamation> {

    return this.http.post<Reclamation>(this.usersUrl+'/Reclamation/AddReclamation/'+userName,Reclamation,this.httpOptions);
  }



}
