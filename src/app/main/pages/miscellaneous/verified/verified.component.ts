import {Component, Inject, OnInit} from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreConfigService } from '@core/services/config.service';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../auth/service";
import {HttpErrorResponse} from "@angular/common/http";

export interface ConfirmTokenDialogData {
  email: string;
}
@Component({
  selector: 'app-not-authorized',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css']
})
export class VerifiedComponent implements OnInit {
  public coreConfig: any;
  token: string;
  error:string;
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: ConfirmTokenDialogData,
      private route: ActivatedRoute,
      private _coreConfigService: CoreConfigService,
      private userService: UserService,
      private dialogRef: MatDialogRef<VerifiedComponent>) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }
  closePopup() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.userService.activateaccount({ token: this.token }).subscribe(
        (response: any) => {
          console.log(response)
          if (response === 'confirmed') {
            // Confirmation successful
            this.dialogRef.close(); // Close the dialog
          } else {
            // Confirmation failed
            this.error = 'Confirmation failed. Please try again.';
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse && error.status === 200) {
            console.log('Confirmation sucess.');
            this.dialogRef.close();
            // Optionally, you can display a success message to the user
          } else {
            console.error('Error in confirmation', error);
            // Handle other error scenarios
          }
        }
    );
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token');
    });

  }
  activate()
  { console.log(this.token);
    this.userService.activateaccount({token:this.token});
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
