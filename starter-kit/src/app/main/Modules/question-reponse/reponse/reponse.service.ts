import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReponseQues} from "../../../../models/ReponseQues";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReponseService implements Resolve<any>{


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
      Promise.all([this.getAllResponse()]).then(() => {
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

  constructor(private _http:HttpClient) { }

  getAllResponse():Observable<ReponseQues[]>{
    return this._http.get<ReponseQues[]>(this.usersUrl+'/Reponse/FindAll',this.httpOptions);
  }

  public ajouterReponse(reponse : ReponseQues,idQuestion:any) :Observable<ReponseQues>{
    return this._http.post<ReponseQues>(this.usersUrl+`/Reponse/AddAndAssignReponseToQuestion/${idQuestion}`,reponse,this.httpOptions);

  }
}
