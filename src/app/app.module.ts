import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { AddJobOfferComponent } from './components/dashboard/list-job-offer/add-job-offer/add-job-offer.component';
import { ListJobOfferComponent } from './components/dashboard/list-job-offer/list-job-offer.component';
import { HomeComponent } from './components/home/home.component';
import {ShowJobOfferComponent} from "./components/job-offers/show-job-offer/show-job-offer.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {environment} from "../environments/enviroments";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {JobOfferReducer} from "./store/job-offer/job-offer.reducer";
import {JobOfferEffects} from "./store/job-offer/job-offer.effects";
import { NavbrComponent } from './components/navbr/navbr.component';
import { StoreComponent } from './components/store/store.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobOffersComponent,
    ShowJobOfferComponent,
    AddJobOfferComponent,
    ListJobOfferComponent,
    HomeComponent,
    NavbrComponent,
    StoreComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({jobOffer: JobOfferReducer}),
    EffectsModule.forRoot([JobOfferEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
