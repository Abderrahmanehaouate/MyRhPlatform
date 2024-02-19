import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {JobOffersComponent} from "./components/job-offers/job-offers.component";
import {ShowJobOfferComponent} from "./components/job-offers/show-job-offer/show-job-offer.component";
import {StoreComponent} from "./components/store/store.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobOffersComponent},
  { path: 'show/:id', component: ShowJobOfferComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'store' , component: StoreComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
