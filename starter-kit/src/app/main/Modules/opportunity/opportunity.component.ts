import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OpportunityServiceService} from "./opportunity-service.service";
import {HttpClient} from "@angular/common/http";
import {Opportunity} from "../../../models/Opportunity";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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







    public showUpdateForm(opportunity: Opportunity): void {
        this.selectedOpportunity = opportunity;
        // show the update form
    }
    qrCode: any; // declare qrCode property

    generateQRCode1(id:any): void {
        this.opportunityService.generateQRCodeForOpportunity(id)
            .subscribe(
                (response) => {
                    const reader = new FileReader();
                    reader.onload = (e: any) => {
                        this.qrCode = e.target.result;
                    };
                    reader.readAsDataURL(new Blob([response], { type: 'image/png' }));
                },
                (error) => {
                    console.error(error);
                }
            );
    }
    generatePdfWithQRCode1(qrCode: string): void {
        const docDefinition = {
            content: [
                {
                    image: qrCode,
                    fit: [150, 150] // taille du QR code
                }
            ]
        };

        pdfMake.createPdf(docDefinition).download('qr-code.pdf');
    }
    public selectedOpportunity: Opportunity;

    title:any
    capacity:any
    generatePdfWithQRCode(qrCode: string): void {
        const docDefinition = {
            content: [
                {
                    text: 'Titre de l opportunité: ' + this.,
                    fontSize: 16,
                    bold: true
                },
                {
                    text: 'Capacité: ' + this.capacity,
                    fontSize: 14,
                },
                {
                    image: qrCode,
                    fit: [150, 150] // taille du QR code
                }
            ]
        };

        pdfMake.createPdf(docDefinition).download('qr-code.pdf');
    }


    generateQRCode(id: any): void {
        this.opportunityService.generateQRCodeForOpportunity(id)
            .subscribe(
                (response) => {
                    const reader = new FileReader();
                    reader.onload = (e: any) => {
                        this.qrCode = e.target.result;
                        this.generatePdfWithQRCode(this.qrCode);
                        console.log(this.selectedOpportunity)

                    };
                    reader.readAsDataURL(new Blob([response], { type: 'image/png' }));
                },
                (error) => {
                    console.error(error);
                }
            );
    }


}
