import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {JobOffersComponent} from "./components/job-offers/job-offers.component";
import {ShowJobOfferComponent} from "./components/job-offers/show-job-offer/show-job-offer.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobOffersComponent},
  { path: 'show/:id', component: ShowJobOfferComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
