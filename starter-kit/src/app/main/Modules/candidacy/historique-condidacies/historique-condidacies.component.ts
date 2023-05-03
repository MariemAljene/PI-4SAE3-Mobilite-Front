import { Component, OnInit } from '@angular/core';
import {FormOpportunityService} from "../../opportunity/opportunity-form/form-opportunity.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../auth/service";
import {CandidacyServiceService} from "../candidacy-service.service";
import {HistoriqueCondidaciesService} from "./historique-condidacies.service";

@Component({
  selector: 'app-historique-condidacies',
  templateUrl: './historique-condidacies.component.html',
  styleUrls: ['./historique-condidacies.component.scss']
})
export class HistoriqueCondidaciesComponent implements OnInit {

  constructor(private opportunityService: FormOpportunityService,private router: Router,private  AuthenticationService:AuthenticationService,private HistoriqueCondidaciesService: HistoriqueCondidaciesService ) { }
  userId = this.AuthenticationService.currentUserValue.userName.toString(); // mettre l'ID de l'utilisateur souhaité ici
  candidacyHistory: any[];

  ngOnInit(): void {
    this.HistoriqueCondidaciesService.getCandidacyHistory(this.userId).subscribe(
        data => {
          this.candidacyHistory = data;
          console.log(data); // pour debug ou vérifier les données reçues
        },
        error => {
          console.log(error);
        }
    );
  }

}
