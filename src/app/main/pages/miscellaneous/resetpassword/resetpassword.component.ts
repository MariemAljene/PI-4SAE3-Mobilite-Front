import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {UserService} from "../../../../auth/service";
import { MatDialog } from '@angular/material/dialog';
import { PasswordResetRequest } from '../../../../auth/models/passwordresetrequest';
import {CoreConfigService} from "../../../../../@core/services/config.service";
export interface request {
  code: string,
  password: string,
  email: string
};

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent  {
    email:string='';
  code: string='';
password: string='';
isTokenSent: boolean = false;
prt : request={
  email:'',
  code:'',
  password:''
}
  constructor(
      private _coreConfigService: CoreConfigService,
    private userService: UserService,
    private router:Router
  ) {
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }


  sendToken() {
    this.email=(<HTMLInputElement>document.getElementById("email")).value;
    console.log(this.email);  // Call the API to send the token to the entered email
    this.userService.generatePasswordResetToken(this.email).subscribe(
      () => {
        this.isTokenSent = true;
        console.log(this.isTokenSent)

      },
      (error) => {
      }
    );
  }
  

  resetPassword() {
    // Call the API to reset the password using the token and new password

    this.prt.email=(<HTMLInputElement>document.getElementById("email1")).value;
    this.prt.code=(<HTMLInputElement>document.getElementById("code")).value;
    this.prt.password=(<HTMLInputElement>document.getElementById("password")).value;

    this.userService.resetPassword(this.prt).subscribe(
      () => {
        console.log(this.prt);
        this.router.navigate(['/pages/authentication/login-v2']);
      },
      (error) => {
        

        // Handle error here
      }
    );
  }
  


}
