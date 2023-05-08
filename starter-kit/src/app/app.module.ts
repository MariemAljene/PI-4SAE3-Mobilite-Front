import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { HomeComponent } from "./main/Modules/home/home.component";

import { SampleModule } from 'app/main/sample/sample.module';
import {CommonModule, DatePipe} from "@angular/common";
import {ContentHeaderModule} from "./layout/components/content-header/content-header.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./AppRoutingModule ";
import {CandidacyComponent} from "./main/Modules/candidacy/candidacy.component";
import {EditOpportunityComponent} from "./main/Modules/opportunity/edit-opportunity/edit-opportunity.component";
import {OpportunityComponent} from "./main/Modules/opportunity/opportunity.component";
import {OpportunityFormComponent} from "./main/Modules/opportunity/opportunity-form/opportunity-form.component";

import {AddQuestionComponent} from "./main/Modules/Question/Add_Question/add-question/add-question.component";
import {RemoveOpportunityComponent} from "./main/Modules/opportunity/remove-opportunity/remove-opportunity.component";
import { SpecialityChartComponent } from './main/Modules/opportunity/speciality-chart/speciality-chart.component';
import { AddCondidacyComponent } from './main/Modules/candidacy/add-condidacy/add-condidacy.component';
import { OpportunityListFrontComponent } from './main/Modules/opportunity/opportunity-list-front/opportunity-list-front.component';
import {
  OpportunityDetailsListComponent
} from "./main/Modules/opportunity/opportunity-details-list/opportunity-details-list.component";
import { HistoriqueCondidaciesComponent } from './main/Modules/candidacy/historique-condidacies/historique-condidacies.component';
import { QuizBackComponent } from './main/Modules/Quiz/quiz-back/quiz-back.component';
import { QuizAddComponent } from './main/Modules/Quiz/Add-Quiz/quiz-add/quiz-add.component';
import {AfficherQuestionComponent} from "./main/Modules/Question/afficher-question/afficher-question.component";
import { RetreiveQuizezComponent } from './main/Modules/Quiz/retreive-quizez/retreive-quizez.component';
const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent, HomeComponent,CandidacyComponent,
    OpportunityComponent,
    OpportunityFormComponent,
    EditOpportunityComponent,
    RemoveOpportunityComponent,
    AddQuestionComponent,
    SpecialityChartComponent,
    AddCondidacyComponent,
    OpportunityListFrontComponent,
    OpportunityDetailsListComponent,
    HistoriqueCondidaciesComponent,
    AfficherQuestionComponent,
    QuizBackComponent,
    QuizAddComponent,
    RetreiveQuizezComponent,],
  imports: [
    CommonModule,
    ContentHeaderModule,
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,NgbModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled", // Add options right here
      relativeLinkResolution: "legacy",
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    AppRoutingModule,
    // App modules
    LayoutModule,
  ],

  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule, FormsModule],
  providers:[DatePipe]
})
export class AppModule {}