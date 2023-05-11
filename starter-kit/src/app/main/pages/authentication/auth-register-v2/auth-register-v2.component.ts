import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';
import { Route, Router } from '@angular/router';
import { UserService } from 'app/auth/service';
import { UserRegisterService } from 'app/auth/service/user-register.service';
import {HttpClient} from "@angular/common/http";
import {VerifiedComponent} from "../../miscellaneous/verified/verified.component";
import {MatDialog} from "@angular/material/dialog";
import {Role, User} from "../../../../auth/models";

@Component({
  selector: 'app-auth-register-v2',
  templateUrl: './auth-register-v2.component.html',
  styleUrls: ['./auth-register-v2.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('dialog', [

      transition(':enter', [

        animate('0.2s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1 })),
      ]),

    ]),
  ],
})
export class AuthRegisterV2Component implements OnInit {
  // Public
  public coreConfig: any;
  public passwordTextType: boolean;
  public registerForm: FormGroup;
  public submitted = false;
  roles: any[];



  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(private http: HttpClient,
    private userService: UserService,//userService c'est sercive dans _services pour http://localhost:9090/...
    private userRegisterService: UserRegisterService,//userAuthService c'est sercive dans _services pour enregistrer role et token dans localStorage
    private router: Router,//redirection
      private dialog: MatDialog,
    private _coreConfigService: CoreConfigService, private _formBuilder: FormBuilder
    ) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
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

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: this._formBuilder.array([
        this._formBuilder.group({
          roleName: ['', [Validators.required]]
        })
      ])
    });

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
    this.http.get<any[]>('http://localhost:8082/roles').subscribe(roles => {
      this.roles = roles;
    });


  }

  /**
   * getRoles
   */
  getAllRole(){
    this.userService.getAllRole();
    }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  register(registerForm: NgForm) {
   const role : Role={
     roleName: registerForm.value.role,
     roleDescription: ''

   }
    const user: User = {
      userName:registerForm.value.userName,
      userFirstName:registerForm.value.userFirstName,
      userLastName: registerForm.value.userLastName,
      userPassword: registerForm.value.userPassword,
      email: registerForm.value.email,

      role: [role],

    };

    this.userService.register(user).subscribe(
      // response c'est la response du spring
      (response: any) => {
        //this.userRegisterService.setRoles(response.role.roleName);
        //this.userRegisterService.setToken(response.jwtToken);

        //this.userRegisterService.setuser_first_name(response.user.user_first_name);
        //this.userRegisterService.setuser_last_name(response.user.user_last_name);
        // redirection 
        //const role = response.user.role[0].roleName;
        //if (role === 'Admin') {
        //  this.router.navigate(['/admin']);
        //} else {
          this.router.navigate(['/pages/authentication/login-v2']);
        const dialogRef = this.dialog.open(VerifiedComponent, {
          width: '500px',
          panelClass: 'my-dialog-class'
        })

        //}
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
