import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./admin.component";
import {AuthGuard} from "../../../auth/helpers";

const routes: Routes = [
  {
    path: "admin",
    component:  AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } 
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  AdminRoutingModule {}
