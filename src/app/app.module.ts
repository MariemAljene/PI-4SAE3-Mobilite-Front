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
import {AppRoutingModule} from "./AppRoutingModule";
import {CandidacyComponent} from "./main/Modules/candidacy/candidacy.component";
import {EditOpportunityComponent} from "./main/Modules/opportunity/edit-opportunity/edit-opportunity.component";
import {OpportunityComponent} from "./main/Modules/opportunity/opportunity.component";
import {OpportunityFormComponent} from "./main/Modules/opportunity/opportunity-form/opportunity-form.component";
import {
  RetreiveQuestionComponent
} from "./main/Modules/Question/Retreive-Question/retreive-question/retreive-question.component";
import {AddQuestionComponent} from "./main/Modules/Question/Add_Question/add-question/add-question.component";
import {RemoveOpportunityComponent} from "./main/Modules/opportunity/remove-opportunity/remove-opportunity.component";
import { SpecialityChartComponent } from './main/Modules/opportunity/speciality-chart/speciality-chart.component';
import { AddCondidacyComponent } from './main/Modules/candidacy/add-condidacy/add-condidacy.component';
import { ChatRoomComponent } from './main/Modules/chat-room/chat-room.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent, HomeComponent,CandidacyComponent,
    OpportunityComponent,
    OpportunityFormComponent,
    EditOpportunityComponent,
    RemoveOpportunityComponent,
    AddQuestionComponent,
    RetreiveQuestionComponent,
    SpecialityChartComponent,
    AddCondidacyComponent,
    ChatRoomComponent,
   ],
  imports: [
    CommonModule,
    ContentHeaderModule,
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxDropzoneModule,
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