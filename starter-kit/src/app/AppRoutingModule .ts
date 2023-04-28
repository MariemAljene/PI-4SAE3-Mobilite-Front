import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



import { HomeComponent } from "./main/Modules/home/home.component";
import {AdminModule} from "./main/Modules/Admin/admin.module";
import {OpportunityComponent} from './main/Modules/opportunity/opportunity.component';
import {CandidacyComponent} from "./main/Modules/candidacy/candidacy.component";
import {OpportunityFormComponent} from './main/Modules/opportunity/opportunity-form/opportunity-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditOpportunityComponent} from './main/Modules/opportunity/edit-opportunity/edit-opportunity.component';
import {RemoveOpportunityComponent} from './main/Modules/opportunity/remove-opportunity/remove-opportunity.component';
import { AddQuestionComponent } from './main/Modules/Question/Add_Question/add-question/add-question.component';
import { RetreiveQuestionComponent } from './main/Modules/Question/Retreive-Question/retreive-question/retreive-question.component';




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
    },{
        path: 'candidacy',
         pathMatch: 'full',component:CandidacyComponent


    },
    {
        path: 'delete-opportunity/:Id_Opportunity',
        component: RemoveOpportunityComponent
    },{
        path: 'RetreiveQuestion/:Id_Opportunity',
        component: RetreiveQuestionComponent
    },
    {path: 'Retreive-opportunite', component: OpportunityComponent},

    {path: 'ajouter-opportunite', component: OpportunityFormComponent},

    {
        path: "**",
        redirectTo: "/pages/miscellaneous/error", //Error 404 - Page not found
    },


];

@NgModule({
    imports: [AdminModule,RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
})
export class AppRoutingModule {}