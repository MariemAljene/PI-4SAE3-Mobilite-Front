import { Component, OnInit } from '@angular/core';
import {OpportunityServiceService} from "../opportunity-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../../auth/service";
import {Opportunity} from "../../../../models/Opportunity";

@Component({
  selector: 'app-opportunity-list-front',
  templateUrl: './opportunity-list-front.component.html',
  styleUrls: ['./opportunity-list-front.component.scss']
})

export class OpportunityListFrontComponent implements OnInit {

  constructor(private opportunityService: OpportunityServiceService,private  AuthenticationService:AuthenticationService ,private router: Router, private _http: HttpClient) { }
  opportunities: Opportunity[];
  opportunityId: number=0;
  opportunity1: Opportunity;

  public selectedOpportunity: Opportunity;

  title:any
  capacity:any
  // @ts-ignore
  description = this.description;
  currentDate = new Date();


  ngOnInit(): void {
    this.opportunityService.getAllOpportunities().subscribe(res => {
      this.opportunities = res;
      console.log(this.opportunities);

      // find the opportunity with the matching ID and set the opportunityId property
      const opportunity = this.opportunities.find(o => o.id_Opportunity === this.opportunityId);
      if (opportunity) {
        this.opportunityId = opportunity.id_Opportunity;
      }
    });


  }
  applyForOpportunity(idOpportunity: number) {
    this.router.navigate(['/addCondidacy', idOpportunity]);
  }

}
