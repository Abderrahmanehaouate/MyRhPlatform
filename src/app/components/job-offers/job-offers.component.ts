import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {JobOffer} from "../../models/job-offer.model";
import {loadJobOffers} from "../../store/job-offer/job-offer.actions";
import {getJobOffersSelector} from "../../store/job-offer/job-offer.selector";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  jobOffers!: JobOffer[];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadJobOffers());
    this.store.select(getJobOffersSelector).subscribe((data) => {
      this.jobOffers = data;
        console.log(this.jobOffers);
    })
  }

}
