import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OpportunityServiceService} from "./opportunity-service.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Opportunity} from "../../../models/Opportunity";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AuthenticationService} from "../../../auth/service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
form:FormGroup;
    constructor(private opportunityService: OpportunityServiceService,private  AuthenticationService:AuthenticationService ,private router: Router, private _http: HttpClient,private formBuilder:FormBuilder)
    {
        this.form = this.formBuilder.group({
            endDate: ['', Validators.required],

        });
    }




    opportunities: Opportunity[];

    httpOptions = {
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
        })
    }

    ngOnInit(): void {
        const roles = this.AuthenticationService.getRoles();

        if(this.AuthenticationService.currentUserValue.role[0].roleName=="Admin" )
        {


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
            });
        }      else              if(this.AuthenticationService.currentUserValue.role[0].roleName=="User" )
        {
            this.router.navigate(['/OpportunityList']);

        }
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





onSubmit(): void {
    this.opportunityService.updateOpportunity(this.opportunityId, this.form.value).subscribe(
        data => {
            console.log(data);
            this.router.navigate(['list_opportunity']);
        },
        error => {
            console.log(error);
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
