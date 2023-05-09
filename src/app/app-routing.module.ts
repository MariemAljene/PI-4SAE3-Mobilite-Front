import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



import { HomeComponent } from "./main/Modules/home/home.component";
import {AdminModule} from "./main/Modules/Admin/admin.module";
import {ProfileModule} from "./main/Modules/profile/profile.module";





const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./main/pages/pages.module").then((m) => m.PagesModule),
  },

 
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },

  {
    path: "**",
    redirectTo: "/pages/miscellaneous/error", //Error 404 - Page not found
  },
  
  
];

@NgModule({
  imports: [ProfileModule,AdminModule,RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}