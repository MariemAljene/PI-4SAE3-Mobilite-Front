import { Component, OnInit } from '@angular/core';
import {OpportunityServiceService} from "../opportunity-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-remove-opportunity',
  templateUrl: './remove-opportunity.component.html',
  styleUrls: ['./remove-opportunity.component.scss']
})
export class RemoveOpportunityComponent implements OnInit {

  Id_Opportunity:any;

  constructor(private opportunityService:OpportunityServiceService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.Id_Opportunity=this.activatedRoute.snapshot.params['Id_Opportunity']
    this.opportunityService.deleteOpportunity(this.Id_Opportunity).subscribe(
        ()=>{
          this.router.navigate(['/opportunity'])
        }
    );
  }


}
