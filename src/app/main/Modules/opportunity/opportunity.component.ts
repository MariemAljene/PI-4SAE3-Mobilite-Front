import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OpportunityServiceService} from "./opportunity-service.service";
import {HttpClient} from "@angular/common/http";
import {Opportunity} from "../../../models/Opportunity";

@Component({
    selector: 'app-opportunity',
    templateUrl: './opportunity.component.html',
    styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
    OpportunityToUpdate = {
        id_Opportunity: "",
        capacity: "",
        starDate: "",
        endDate: "",
        type: "",
        grade: "",
        specialite: "",
        needs: "",
        description: "",
        Title: "",
        Coef1stYear: "",
        Coef2stYear: "",
        Coef3stYear: "",

    }
    opportunity: Opportunity

    constructor(private opportunityService: OpportunityServiceService, private router: Router, private _http: HttpClient) {
    }

    opportunities: Opportunity[];



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



    edit(opportunity: any){
        this.opportunityToUpdate = opportunity;
    }

    updateJournal(){
        this.opportunityService.updateOpportunity(this.OpportunityToUpdate).subscribe(
            (resp) => {
                console.log(resp);
            },
            (err) => {
                console.log(err);
            }
        );
    }






    public selectedOpportunity: Opportunity;

    public showUpdateForm(opportunity: Opportunity): void {
        this.selectedOpportunity = opportunity;
        // show the update form
    }
}
