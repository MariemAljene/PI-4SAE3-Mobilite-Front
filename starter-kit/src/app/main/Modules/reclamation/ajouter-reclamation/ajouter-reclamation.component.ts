import { Component, OnInit } from '@angular/core';
import {AjouterFoyerService} from "../../foyer/ajouter-foyer/ajouter-foyer.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {User} from "../../../../auth/models";
import {Foyer} from "../../../../models/Foyer";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../../auth/service";
import {Reclamation} from "../../../../models/Reclamation";
import {ReclamationService} from "../reclamation.service";

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.scss']
})
export class AjouterReclamationComponent  {

    comment!:any;
    objet!:any;

    userName: string;


  constructor(private reclamationService: ReclamationService,private router: Router,private  authenticationService:AuthenticationService,private toastr: ToastrService) {
      this.userName = this.authenticationService.currentUserValue.userName.toString();
  }
  user:User
  reclamation:Reclamation
  onSubmit(form: NgForm) {

    const reclamation: any = form.value;


    this.reclamationService.ajouterReclamation(reclamation,this.userName)
        .subscribe(
            newReclamation => {
              console.log('Foyer created successfully', newReclamation);
              this.toastr.success("Reclamation created successfully")
              // Redirect the user to the newly created opportunity details page
            },
            error => {
              this.toastr.error("Something went wrong please try again ");
              console.error('Error creating Reclamation', error);
              // Display an error message to the user
            }
        );
    this.router.navigate(['/ajouterReclamation']);

  }

}
