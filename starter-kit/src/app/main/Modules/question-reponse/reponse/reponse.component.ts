import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Condidacy} from "../../../../models/Condidacy";
import {ReponseQues} from "../../../../models/ReponseQues";

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {

  constructor(private _http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })}
  reponses:ReponseQues[];
  ngOnInit(): void {
    this._http.get<ReponseQues[]>(' http://localhost:8082/examen/Reponse/FindAll',this.httpOptions).subscribe(res => {
      this.reponses = res;
      console.log(this.reponses);
    });
  }




}
