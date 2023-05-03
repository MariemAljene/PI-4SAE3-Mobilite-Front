import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Opportunity} from "../../../../models/Opportunity";
import {OpportunityServiceService} from "../opportunity-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-opportunity-details-list',
  templateUrl: './opportunity-details-list.component.html',
  styleUrls: ['./opportunity-details-list.component.scss']
})
export class OpportunityDetailsListComponent implements OnInit {
opportunity:Opportunity
    constructor(
        private route: ActivatedRoute,
        private opportunityService: OpportunityServiceService
    ) {}
    journalDetails = null as any;




    ngOnInit(): void {
        const id_Opportunity = +this.route.snapshot.paramMap.get('id_Opportunity');
        this.journalDetails = this.opportunityService.getOpportunityById(id_Opportunity);
    }

}
