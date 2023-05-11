import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../../models/Reclamation";
import {QuestionReponseService} from "../question-reponse/question-reponse.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ReclamationService} from "./reclamation.service";
import { DatePipe } from '@angular/common';
import {AuthenticationService} from "../../../auth/service";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {

  reclamation : Reclamation


  constructor(private reclamationService: ReclamationService, private router: Router, private _http: HttpClient,private datePipe: DatePipe,private auth :AuthenticationService) {
  }
  reclamations:Reclamation[] ;

  ngOnInit(): void {
    if(this.auth.currentUserValue.role[0].roleName=="Admin"){
      this.reclamationService.getAllReclamation().subscribe(res => {
        this.reclamations = res;
        console.log(this.reclamations);

      });
    }
    else if(this.auth.currentUserValue.role[0].roleName=="User"){
      this.router.navigate(['/ajouterReclamation'])
    }

  }

  searchText :string='';

  onSearchTextEntred(searchValue: string){
    this.searchText=searchValue;
  }

}
