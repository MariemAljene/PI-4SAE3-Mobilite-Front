import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OpportunityServiceService} from "../../opportunity/opportunity-service.service";
import {CandidacyServiceService} from "../candidacy-service.service";
import {Opportunity} from "../../../../models/Opportunity";
import {Condidacy} from "../../../../models/Condidacy";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../../auth/service";

@Component({
  selector: 'app-add-condidacy',
  templateUrl: './add-condidacy.component.html',
  styleUrls: ['./add-condidacy.component.scss']
})
export class AddCondidacyComponent implements OnInit {
  opportunity: Opportunity;
  condidacy: Condidacy = new Condidacy();
   public opportunityId: number;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private opportunityService: OpportunityServiceService,
      private condidacyService: CandidacyServiceService,private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.opportunityId = +params.get('id');
      this.opportunityService
          .getOpportunityById(this.opportunityId)
          .subscribe(opportunity => (this.opportunity = opportunity));
    });
  }
  createCandidacy(form: NgForm) {
    console.log('Opportunity ID:', this.opportunityId);

    if (form.valid) {
      const condidacy = new Condidacy();
      condidacy.moyenne_1year = form.value.moyenne_1year;
      condidacy.moyenne_2year = form.value.moyenne_2year;
      condidacy.moyenne_3year = form.value.moyenne_3year;
      condidacy.motivationdescription = form.value.motivationdescription;


      const studentId = this.authenticationService.currentUserValue.userName.toString(); // replace with the actual ID of the logged-in student

      this.condidacyService
          .createCandidate(condidacy, studentId, this.opportunityId)
          .subscribe(() => {
            this.router.navigate(['/opportunities']);
          });
    }
  }
}