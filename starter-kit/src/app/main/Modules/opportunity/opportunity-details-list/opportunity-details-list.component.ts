    import {Component, Input, OnInit} from '@angular/core';
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
        constructor(
            private route: ActivatedRoute,
            private opportunityService: OpportunityServiceService
        ) {}
        OpportunityDetails = Opportunity as any;
        @Input() opportunity: Opportunity;




        ngOnInit() {
            const id_Opportunity = +this.route.snapshot.paramMap.get('id_Opportunity');
            this.opportunityService.getOpportunityById(id_Opportunity).subscribe(opportunity => this.opportunity = opportunity);
        }

    }
