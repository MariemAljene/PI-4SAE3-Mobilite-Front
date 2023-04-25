import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './shared/service/service.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FeaturesComponent } from './shared/features/features.component';

const routes: Routes = [{path:'features', component:FeaturesComponent},
{path:'service', component:ServiceComponent},
{path:'**', component:SpinnerComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
