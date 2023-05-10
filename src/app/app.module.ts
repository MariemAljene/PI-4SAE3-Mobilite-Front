import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {ToastrModule} from 'ngx-toastr'; // For auth after login toast

import {CoreModule} from '@core/core.module';
import {CoreCommonModule} from '@core/common.module';
import {CoreSidebarModule, CoreThemeCustomizerModule} from '@core/components';
import { ScheduleModule } from "@syncfusion/ej2-angular-schedule";
import {coreConfig} from 'app/app-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {SampleModule} from 'app/main/sample/sample.module';
import {OpportunityComponent} from './main/Modules/opportunity/opportunity.component';
import {CandidacyComponent} from "./main/Modules/candidacy/candidacy.component";
import {OpportunityFormComponent} from './main/Modules/opportunity/opportunity-form/opportunity-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditOpportunityComponent} from './main/Modules/opportunity/edit-opportunity/edit-opportunity.component';
import {RemoveOpportunityComponent} from './main/Modules/opportunity/remove-opportunity/remove-opportunity.component';
import { AppointementComponent } from './main/Modules/appointement/appointement/appointement.component';
import { EditComponent } from './main/Modules/appointement/edit/edit.component';
import { WaitinglistComponent } from './main/Modules/appointement/waitinglist/waitinglist.component';
import { HistoriqueappointmentComponent } from './main/Modules/appointement/historiqueappointment/historiqueappointment.component';
import { DashboardAppointmentComponent } from './main/Modules/appointement/dashboard-appointment/dashboard-appointment.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './main/Modules/calendar/calendar.component';
const appRoutes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'delete-opportunity/:Id_Opportunity',
        component: RemoveOpportunityComponent
    },
    {path: 'ajouter-opportunite', component: OpportunityFormComponent},
    {
        path: 'edit/:id',
        component: EditOpportunityComponent
    }

    ,
    {
        path: 'candidacy',
        redirectTo: '/candidacy', pathMatch: 'full'


    },
    {path: 'appointment', component: AppointementComponent},
    {path: 'waitinglist', component: WaitinglistComponent},
    {path: 'historique', component: HistoriqueappointmentComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'chartappointment', component: DashboardAppointmentComponent},
 
    {
        path: '**',
        redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
    }
];

@NgModule({
    declarations: [AppComponent,
        CandidacyComponent,
        OpportunityComponent,
        OpportunityFormComponent,
        EditOpportunityComponent,
        RemoveOpportunityComponent,
        AppointementComponent,
        EditComponent,
        WaitinglistComponent,
        HistoriqueappointmentComponent,
        DashboardAppointmentComponent,
        CalendarComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule, FormsModule,
        ReactiveFormsModule,
        ScheduleModule,
        FullCalendarModule,
    
        

        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled', // Add options right here
            relativeLinkResolution: 'legacy'
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

        // App modules
        LayoutModule,
        SampleModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
