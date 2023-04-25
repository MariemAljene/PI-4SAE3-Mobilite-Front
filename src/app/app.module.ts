import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';

import { APP_BASE_HREF } from '@angular/common';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FullSearchComponent } from './shared/full-search/full-search.component';
import { FactsComponent } from './shared/facts/facts.component';
import { AboutComponent } from './shared/about/about.component';
import { FeaturesComponent } from './shared/features/features.component';
import { ServiceComponent } from './shared/service/service.component';
import { PricingComponent } from './shared/pricing/pricing.component';
import { QuoteComponent } from './shared/quote/quote.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { TeamComponent } from './shared/team/team.component';
import { BlogComponent } from './shared/blog/blog.component';
import { VendorComponent } from './shared/vendor/vendor.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './shared/carousel/carousel.component';

const ROUTES:Routes = [
  {path:'features', component:FeaturesComponent},
  {path:'service', component:ServiceComponent},
  {path:'**', component:SpinnerComponent},


]


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SpinnerComponent,
    TopbarComponent,
    FullSearchComponent,
    FactsComponent,
    AboutComponent,
    FeaturesComponent,
    ServiceComponent,
    PricingComponent,
    QuoteComponent,
    TestimonialComponent,
    TeamComponent,
    BlogComponent,
    VendorComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
