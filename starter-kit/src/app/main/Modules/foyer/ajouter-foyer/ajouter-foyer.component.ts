import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {
  AjoutQuestionReponseService
} from "../../question-reponse/ajouter-question-reponse/ajout-question-reponse.service";
import {Router} from "@angular/router";
import {User} from "../../../../auth/models";
import {QuestionRep} from "../../../../models/QuestionRep";
import {FormBuilder, FormGroup, FormsModule, NgForm, Validators} from "@angular/forms";
import {AjouterFoyerService} from "./ajouter-foyer.service";
import {AuthenticationService} from "../../../../auth/service";
import {Foyer} from "../../../../models/Foyer";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-ajouter-foyer',
  templateUrl: './ajouter-foyer.component.html',
  styleUrls: ['./ajouter-foyer.component.scss']
})
export class AjouterFoyerComponent implements  OnInit{

    name!:any;
    pays!:any;
    capacite!:any;
    placeLibre!:any;

    constructor(private foyerService: AjouterFoyerService,private router: Router,private  AuthenticationService:AuthenticationService,private toastr: ToastrService) {}
    user:User
    foyer:Foyer
    onSubmit(form: NgForm) {

        const foyer: any = form.value;

        this.foyerService.AjouterFoyer(foyer)
            .subscribe(
                newFoyer => {
                    console.log('Foyer created successfully', newFoyer);
                    this.toastr.success("Foyer created successfully")
                    // Redirect the user to the newly created opportunity details page
                },
                error => {
                    this.toastr.error("Something went wrong please try again ");
                    console.error('Error creating Foyer', error);
                    // Display an error message to the user
                }
            );
        this.router.navigate(['/foyer']);

    }

    ngOnInit(): void {
    }



}
