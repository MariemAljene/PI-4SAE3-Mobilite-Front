import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OpportunityServiceService} from "./opportunity-service.service";
import {Opportunity} from "../../../models/Opportunity";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-opportunity',
    templateUrl: './opportunity.component.html',
    styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
    OpportunityToUpdate = {
        id_Opportunity: "",
        Capacity: "",
        StarDate: "",
        EndDate: "",
        Type: "",
        grade: "",
        specialite: "",
        needs: "",
        Description: "",
        Title: "",
        Coef1stYear: "",
        Coef2stYear: "",
        Coef3stYear: "",

    }
    opportunity: Opportunity

    constructor(private opportunityService: OpportunityServiceService, private router: Router, private _http: HttpClient) {
    }

    opportunities: Opportunity[];
    selectedOpportunity: any = {};

    saveOpportunity(): void {
        // call the service method to save the opportunity
        this.opportunityService.updateOpportunity(this.OpportunityToUpdate.id_Opportunity).subscribe(
            () => {
                // handle success
            },
            (error) => {
                // handle error
            }
        );
    }

    ngOnInit(): void {
        this.opportunityService.getAllOpportunities().subscribe(res => {
            this.opportunities = res;
            console.log(this.opportunities);
        });
    }

    goToAddOpportunity() {
        this.router.navigate(['/ajouter-opportunite']);
    }
    goToDeleteOpportunity() {
        this.router.navigate(['/delete-opportunity'+this.opportunity.id_Opportunity]);
    }



    currentDate = new Date();
    opportunityToUpdate: Opportunity;


    deleteOpportunity(id: number) {
        location.reload();

        this.opportunityService.deleteOpportunity(id).subscribe(
            (resp) => {
                console.log(resp);

            },
            (err) => {
                console.log(err);
            }
        );
    }
    confirmDeleteOpportunity(opportunityId: number): void {
        if (confirm("Voulez-vous vraiment supprimer cette opportunité ?")) {
            this.deleteOpportunity(opportunityId);
        }
    }



    edit(opporutnity: Opportunity) {
        this.opportunityToUpdate = opporutnity;
    }

    updateOpportunity() {
        this.saveOpportunity();
        location.reload();
    }
}
