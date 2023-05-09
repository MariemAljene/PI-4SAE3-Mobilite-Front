import { Component, OnInit } from '@angular/core';
import { User } from 'app/auth/models';
import { AuthenticationService, UserService } from 'app/auth/service';
import { Subject } from 'rxjs';
import {CoreConfigService} from "../../../../@core/services/config.service";
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-reglement',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
user:User;
userList:User[];
c:number;
co:number;
ca:number;
  searchTerm: string;
  searchedUser: User[];

public currentUser: User;
public contentHeader: object;
count=this.userService.count().subscribe((data: number) => {
  this.c = data;
});
countoperateur=this.userService.countoperateur().subscribe((data: number) => {
  this.co = data;
});
countadmin=this.userService.countadmin().subscribe((data: number) => {
  this.ca = data;
});
 // private
 private _unsubscribeAll: Subject<any>;
  constructor(private _coreConfigService: CoreConfigService,private userService:UserService,private _authenticationService: AuthenticationService) {
    this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    this._unsubscribeAll = new Subject();
    this._coreConfigService.config = {
      layout: {
        skin  : 'dark',                        // default, dark, bordered, semi-dark
        type  : 'vertical'
      }
    };
   }


  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.c);
    this.contentHeader = {
      headerTitle: '  Admin',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'List of Users',
            isLink: false
          }
        ]
      }
    };
    this.user = new User();
    //getEtudiants
    this.userService.getAll().subscribe((data: User[]) => {
      this.userList = data;
      this.searchedUser = data;
    });
  }
  delete(userName: string) {
    this.userService.delete(userName).subscribe((data) => {
      console.log(data);
      this.userService.getAll();
      location.reload();
    
  })
}
  /* PDF */
  generatePdf(userName: string) {

    //Récuperer l'id de l'opportunité
    const user = this.userList.find(o => o.userName === userName);

    // Utiliser jsPDF pour générer le PDF
    const doc = new jsPDF();
   // const fond = new Image();
   // fond.src = '/assets/img/fond-pdf.png';
   // doc.addImage(fond, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
    doc.text('A new user called ' + '"' + user.userName + '"' + ' is now available.', 30, 75);
    doc.text('We believe this opportunity is a great fit for you,', 40, 90);
    doc.text('and we encourage you to take advantage of it.', 41, 105);
    doc.text('For further details, please scan the QR code below.', 37, 120);
    doc.setTextColor(255, 0, 0);
    // Enregistrer le fichier PDF
    doc.save('user-' + userName + '.pdf');
  }

  /*Recherche dynamique*/
  onSearch() {
    if (this.searchTerm) { // si le terme de recherche est non nul
      this.searchedUser = this.userList.filter(opp =>
          opp.userName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          opp.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          opp.userFirstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          opp.userLastName.toLowerCase().includes(this.searchTerm.toLowerCase())

      );
    } else { // sinon, afficher toutes les opportunités
      this.searchedUser = this.userList;
    }
  }

}
