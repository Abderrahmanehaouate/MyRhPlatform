import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JobOffer} from "../../models/job-offer.model";
import {AddJobOfferComponent} from "./add-job-offer/add-job-offer.component";
import {loadJobOffers} from "../../store/job-offer/job-offer.actions";
import {getJobOffersSelector} from "../../store/job-offer/job-offer.selector";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  jobOffers!: JobOffer[];
  displayedColumns: string[] = ['title', 'description', 'salary', 'location', 'email', 'phone', 'city', 'educationLevel', 'company', 'actions'];

  constructor(private dialog:MatDialog,
              private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadJobOffers());
    this.store.select(getJobOffersSelector).subscribe((data) => {
      this.jobOffers = data;
      console.log(this.jobOffers);
    })
  }

  AddJobOffer(){
    this.OpenPopup({} as JobOffer, "Add Job Offer");
  }

  OpenPopup(jobOffer: JobOffer, title: string){
    this.dialog.open(AddJobOfferComponent, {
      width: '50%',
      height: '90%',
      enterAnimationDuration: "1000ms",
      exitAnimationDuration: "1000ms",
      data: {
        jobOffer: jobOffer,
        title: title
      }
    })
  }
}
