import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';

import { ErrorComponent } from 'app/main/pages/miscellaneous/error/error.component';
import {VerifiedComponent} from "./verified/verified.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";

// routing
const routes: Routes = [
  {
    path: 'miscellaneous/error',
    component: ErrorComponent,
    data: { animation: 'misc' }
  },
  {
    path: 'miscellaneous/verified/:token',
    component: VerifiedComponent
  },
  {
    path: 'miscellaneous/reset-password',
    component: ResetpasswordComponent
  }

];

@NgModule({
  declarations: [VerifiedComponent,ErrorComponent,ResetpasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreCommonModule]
})
export class MiscellaneousModule {}
