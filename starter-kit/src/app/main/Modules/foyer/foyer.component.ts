import { Component, OnInit } from '@angular/core';
import {Foyer} from "../../../models/Foyer";
import {QuestionReponseService} from "../question-reponse/question-reponse.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FoyerService} from "./foyer.service";
import {AuthenticationService} from "../../../auth/service";

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.scss']
})
export class FoyerComponent implements OnInit {
  foyer:Foyer;

  Foyers :Foyer[];
  idToDelete:any;
  p=1;

  constructor(private foyerService: FoyerService, private router: Router, private _http: HttpClient,private auth : AuthenticationService) {
  }


  ngOnInit(): void {
    if(this.auth.currentUserValue.role[0].roleName=="Admin"){
      this.foyerService.getAllFoyer().subscribe(res => {
        this.Foyers = res;
        console.log(this.Foyers);

      });

    }else if(this.auth.currentUserValue.role[0].roleName=="User")
    {
      this.router.navigate(['/foyerFront'])
    }

  }

  deleteFoyer(id:any,a:any){
    if (confirm("do you really want to delete this item ?"))
    {
      this.foyerService.deleteFoyer(id).subscribe(),
          this.delete(a)
    }
  }
  delete(a:any){
    this.Foyers.splice(a,1)

  }

  goToAjouterFoyer() {
    this.router.navigate(['/ajouterFoyer']);
  }


  searchText :string='';

  onSearchTextEntred(searchValue: string){
    this.searchText=searchValue;
  }



}
