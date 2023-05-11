import { Component, OnInit } from '@angular/core';
import {Foyer} from "../../../../models/Foyer";
import {FoyerService} from "../foyer.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../../auth/service";

@Component({
  selector: 'app-foyer-front',
  templateUrl: './foyer-front.component.html',
  styleUrls: ['./foyer-front.component.scss']
})
export class FoyerFrontComponent implements OnInit {





  foyer:Foyer;

  Foyers :Foyer[];
  p=1;
  userName: string ;


  constructor(private foyerService: FoyerService, private router: Router, private _http: HttpClient,private authenticationService: AuthenticationService) {
  }


  ngOnInit(): void {
    this.foyerService.getAllFoyer().subscribe(res => {
      this.Foyers = res;
      console.log(this.Foyers);

      this.userName=this.authenticationService.currentUserValue.userName.toString();

    });
    this.p=1;


  }



  affectationEtudiant() {

    const apiUrl = `http://localhost:8082/examen/Chambre/affecterEtudiant/${this.userName}`;

    this._http.post(apiUrl, {}).subscribe(
        (response) => {
          // Handle successful response if needed
          console.log(response);
        },
        (error) => {
          // Handle error if needed
          console.log(error);
        }
    );
  }



  searchText :string='';

  onSearchTextEntred(searchValue: string){
    this.searchText=searchValue;
  }
  getCountryDetails(countryName: string) {
    // Call RestCountry API to get country details
    this.foyerService.getCountryDetails(countryName).subscribe(details => {
      const foyer = this.Foyers.find(f => f.pays === countryName);
      if (foyer) {
        foyer.countryDetails ={
          population : details[0].population,
          capital : details[0].capital,
        } ;
      }
      // Process and display the details as needed
      console.log(details);
    });
  }
  extractLanguages(languagesData: any): string[] {
    if (Array.isArray(languagesData)) {
      return languagesData.map(lang => lang.name);
    } else if (typeof languagesData === 'object') {
      return [languagesData.name];
    }
    return [];
  }



}
