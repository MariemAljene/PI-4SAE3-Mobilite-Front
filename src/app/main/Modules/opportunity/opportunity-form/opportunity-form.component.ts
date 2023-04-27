import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {OpportunityServiceService} from "../opportunity-service.service";
import {FormOpportunityService} from "./form-opportunity.service";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-opportunity-form',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.scss']
})
export class OpportunityFormComponent {
  Id_Opportunity!: number;
  capacity!: number;
  startDate!: Date;
  endDate!: Date;
  type!: string;
  grade!: string;
  specialite!: string;
  needs!: number;
  description!: string;
  title!: string;
  Coef1stYear!: number;
  Coef2stYear!: number;
  Coef3stYear!: number;
  Date: Date = new Date();

  opportunityForm = new FormGroup({
    capacity: new FormControl('', [Validators.required, Validators.min(0)]),
    startDate: new FormControl('', [Validators.required, Validators.min(Date.now())]),
    endDate: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    title: new FormControl('', Validators.required)
  });

  constructor(private opportunityService: FormOpportunityService,private router: Router) {}

  onSubmit(form: NgForm) {
    const opportunity: any = form.value;
    const idPartner = 'mariem'; // Replace this with the appropriate partner ID
    this.opportunityService.createOpportunity(opportunity, idPartner)
        .subscribe(
            newOpportunity => {
              console.log('Opportunity created successfully', newOpportunity);
              // Redirect the user to the newly created opportunity details page
            },
            error => {
              console.error('Error creating opportunity', error);
              // Display an error message to the user
            }
        );
    this.router.navigate(['/opportunity']);

  }
}
