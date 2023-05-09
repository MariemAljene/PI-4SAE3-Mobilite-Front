import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OpportunityServiceService} from "../../opportunity/opportunity-service.service";
import {CandidacyServiceService} from "../candidacy-service.service";
import {Opportunity} from "../../../../models/Opportunity";
import {Condidacy} from "../../../../models/Condidacy";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../auth/service";

@Component({
  selector: 'app-add-condidacy',
  templateUrl: './add-condidacy.component.html',
  styleUrls: ['./add-condidacy.component.scss']
})
export class AddCondidacyComponent implements OnInit {

    condidacyForm: FormGroup;
    idStudent: string;
    idOpportunity: number;

    @Input() opportunity: Opportunity;
    public id_Opportunity: number;


    Id_Condidacy !: number;
    moyenne_1year !: number;
    moyenne_2year !: number;
    moyenne_3year !: number;
    score!: number;
    attempted!: boolean;
    motivationdescription!: string;
    status!: number;
    user!: string;
    idTable!: number;
    nameFaculte!: string


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private opportunityService: OpportunityServiceService,
        private condidacyService: CandidacyServiceService,
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder,
    ) {

    }

    ngOnInit(): void {

        this.id_Opportunity = +this.route.snapshot.paramMap.get('id_Opportunity');


    }

    @Input() condidacy: Condidacy;

    submitForm(form: NgForm) {
        const newCondidacy: any = form.value;
        const idStudent = this.authenticationService.currentUserValue.userName.toString();
        this.id_Opportunity = +this.route.snapshot.paramMap.get('idOpportunity');
console.log(this.id_Opportunity);
        if (!Number.isInteger(this.id_Opportunity)) {
            console.log('Invalid idOpportunity value: ' +  this.id_Opportunity);
            return;
        }

        this.condidacyService.createCandidate(newCondidacy, idStudent, this.id_Opportunity)
            .subscribe(condidacy => console.log(condidacy));
    }
}