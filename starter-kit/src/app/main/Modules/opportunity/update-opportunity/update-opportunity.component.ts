import { Component, OnInit } from '@angular/core';
import {OpportunityServiceService} from "../opportunity-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../auth/service";

@Component({
  selector: 'app-update-opportunity',
  templateUrl: './update-opportunity.component.html',
  styleUrls: ['./update-opportunity.component.scss']
})
export class UpdateOpportunityComponent implements OnInit {

  constructor(private opportunityService: OpportunityServiceService,private  AuthenticationService:AuthenticationService ,private router: ActivatedRoute,private route:Router, _http: HttpClient,private formBuilder:FormBuilder)
  {   this.form = this.formBuilder.group({
      endDate: ['', Validators.required],
      coef1stYear: ['', Validators.required],
      coef2stYear: ['', Validators.required],
      coef3stYear: ['', Validators.required],


  });}
  opportunity:any
  ngOnInit(): void {
    this.id_Opportunity = this.router.snapshot.paramMap.get("id_Opportunity");
    this.opportunityService.getOpportunityById(this.id_Opportunity).subscribe(
        data => {
          this.opportunity = data;
          this.form.patchValue(data);
        },
        error => {
          console.log(error);
        }
    );
  }
  id_Opportunity:any
  form:FormGroup;
  onSubmit(): void {
    this.opportunityService.updateOpportunity(this.id_Opportunity, this.form.value).subscribe(
        data => {
          console.log(data);
          this.route.navigate(['Retreive-opportunite']);
        },
        error => {
          console.log(error);
        }
    );
  }


}
