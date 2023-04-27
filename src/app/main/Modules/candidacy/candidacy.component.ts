import { Component, OnInit } from '@angular/core';
import {Opportunity} from "../../../models/Opportunity";
import {Condidacy} from "../../../models/Condidacy";
import {OpportunityServiceService} from "../opportunity/opportunity-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CandidacyServiceService} from "./candidacy-service.service";

@Component({
  selector: 'app-candidacy',
  templateUrl: './candidacy.component.html',
  styleUrls: ['./candidacy.component.scss']
})
export class CandidacyComponent implements OnInit {
  Condidacies: Condidacy[];
  Candidacy: Condidacy;
  opportunity:Opportunity;
  opportunities:Opportunity[];


  constructor(private candidacyServiceService: CandidacyServiceService, private router: Router, private _http: HttpClient) { }

  code: string
  retrieveCandidaciesByCode() {
    const url = `http://localhost:8091/ExamenBlancTemplate/CandidacyManagement/RetreiveCandidacyOppParCode/${this.code}`;
    this._http.get<any[]>(url).subscribe(
        candidacies => this.Condidacies = candidacies,
        error => console.error(error)
    );
  }
  ngOnInit(): void {
    this.candidacyServiceService.getAllCandidacies().subscribe(res => {
      this.Condidacies = res;
      console.log(this.opportunities);
    });
  }

  id_opportunity: any;
  sendEmail(id: any) {
    this.id_opportunity = this.Condidacies.filter(c => c.idTable == id)[0].idTable;
    console.log("id_opportunity: ", this.id_opportunity);
    this.candidacyServiceService.sendEmail(this.id_opportunity).subscribe(
        (data) => {
          console.log("Email envoyé avec succès", data);
        },
        (error) => {
          console.log("Erreur lors de l'envoi de l'e-mail", error);
        }
    );
  }

}
