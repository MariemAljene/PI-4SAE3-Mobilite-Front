import {Component, Input, OnInit} from '@angular/core';
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
  @Input() opportunity: Opportunity;
  condidacy: Condidacy = new Condidacy();
   public id_Opportunity: number;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private opportunityService: OpportunityServiceService,
      private condidacyService: CandidacyServiceService,private authenticationService:AuthenticationService
  ) { }

    ngOnInit() {
        const id_Opportunity = +this.route.snapshot.paramMap.get('id_Opportunity');
        this.opportunityService.getOpportunityById(id_Opportunity).subscribe(opportunity => this.opportunity = opportunity);
    }

    createCandidacy(condidacyForm: NgForm) {
        this.condidacyService
            .createCandidate(
                this.condidacy,
                this.authenticationService.currentUserValue.userName.toString(),
                this.id_Opportunity
            )
            .subscribe((result) => {
                console.log(result);
                this.router.navigate(['/candidacy']);
            });
    }
}