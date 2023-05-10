import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import {CandidacyComponent} from "../Modules/candidacy/candidacy.component";
import {OpportunityComponent} from "../Modules/opportunity/opportunity.component";
import {RemoveOpportunityComponent} from "../Modules/opportunity/remove-opportunity/remove-opportunity.component";

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  }, {
    path: 'candidacy',
    component: CandidacyComponent,
    data: { animation: 'candidacy' }
  },{
    path: 'opportunity',
    component: OpportunityComponent,
    data: { animation: 'opportunity' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
