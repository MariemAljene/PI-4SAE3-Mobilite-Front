import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OpportunityServiceService} from "./opportunity-service.service";
import {HttpClient} from "@angular/common/http";
import {Opportunity} from "../../../models/Opportunity";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
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

            // find the opportunity with the matching ID and set the opportunityId property
            const opportunity = this.opportunities.find(o => o.id_Opportunity === this.opportunityId);
            if (opportunity) {
                this.opportunityId = opportunity.id_Opportunity;
            }
        });


        this.opportunityService.getOpportunityById(this.opportunityId).subscribe(opportunity => {
                this.opportunity1 = opportunity;
                this.title = opportunity.title;
                this.capacity = opportunity.capacity;
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
    opportunityId: number=0;

    opportunity1: Opportunity;

    public selectedOpportunity: Opportunity;

    title:any
    capacity:any
     // @ts-ignore
    description = this.description;

    generatePdfWithQRCode(qrCode: string): void {
        this.opportunityService.getOpportunityById(this.opportunityId).subscribe((opportunity: Opportunity) => {
            const docDefinition = {
                content: [
                    {
                        text: opportunity.title,
                        fontSize: 24,
                        bold: true,
                        alignment: 'center',
                        margin: [0, 0, 0, 10],
                        color: '#FF5733'
                    },
                    {
                        text: opportunity.description,
                        fontSize: 14,
                        margin: [0, 0, 0, 20],
                        color: '#808080'
                    },
                    {
                        text: 'Date Debut : ' + opportunity.starDate,
                        fontSize: 14,
                        margin: [0, 0, 0, 20],
                        color: '#FF5733'
                    },
                    {
                        text: 'Date fin: ' + opportunity.endDate,
                        fontSize: 14,
                        margin: [0, 0, 0, 20],
                        color: '#FF5733'
                    },
                    {
                        alignment: 'center',
                        image: qrCode,
                        fit: [150, 150],
                        margin: [0, 0, 0, 10],
                        border: [true, true, true, true],
                        borderColor: '#000',
                        borderWidth: 1
                    },
                    {
                        alignment: 'center',
                        text: 'Scan Me 📷',
                        fontSize: 12,
                        margin: [0, 0, 0, 10],
                        color: '#FF5733'
                    }
                ],
                styles: {
                    header: {
                        bold: true,
                        color: 'blue'
                    }
                },
                pageMargins: [40, 60, 40, 60], // add margins to give space for the border
                pageBorderWidth: 1, // set border width
                pageBorderColor: '#000' // set border color
            };

            pdfMake.createPdf(docDefinition).download('qr-code.pdf');
        });
    }


    generateQRCode(id: any): void {
        this.opportunityId = id;

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
