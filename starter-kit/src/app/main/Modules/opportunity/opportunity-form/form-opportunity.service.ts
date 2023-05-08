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

  private readonly baseUrl = 'http://localhost:8091/ExamenBlancTemplate/OpportunityManagement/Opportunity';
  private _refrD$ = new Subject;

  createOpportunity(opportunity: Opportunity, idPartner: string): Observable<Opportunity> {
    const url = `http://localhost:8091/ExamenBlancTemplate/OpportunityManagement/Opportunity/CreateNewOpportunity/${idPartner}`;
    return this.http.post<Opportunity>(url, opportunity);

  }

  private apiUrl = 'http://localhost:8082/Opportunity/Opportunity/CreateNewOpportunity';


  createOpportunity1(opportunity: Opportunity, id_Partner: string): Observable<Opportunity> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
      })
    };

    // Génère une clé aléatoire pour masquer l'id du partenaire
    const maskKey = this.generateMaskKey();

    // Construit l'URL avec la clé de masquage
    const url = `${this.apiUrl}/${maskKey}`;

    // Crée une copie de l'objet opportunity pour éviter de modifier l'original
    const opportunityCopy = Object.assign({}, opportunity);

    // Stocke l'ID du partenaire masqué dans la copie de l'objet opportunity pour pouvoir l'utiliser plus tard
    opportunityCopy.maskedPartnerId = maskKey;

    // Envoie la requête HTTP avec l'URL masquée et l'opportunité modifiée
    return this.http.post<Opportunity>(url, opportunityCopy, httpOptions);
  }

  private generateMaskKey(): string {
    // Utilisez la logique que vous souhaitez pour générer une clé aléatoire unique
    // Dans cet exemple, j'utilise Math.random() pour générer une chaîne de caractères aléatoire de longueur 10
    return Math.random().toString(36).substr(2, 10);
  }

}






