import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {getJobOffer} from "../../../store/job-offer/job-offer.actions";
import {getJobOfferSelector} from "../../../store/job-offer/job-offer.selector";
import {JobOffer} from "../../../models/job-offer.model";

@Component({
  selector: 'app-show-job-offer',
  templateUrl: './show-job-offer.component.html',
  styleUrls: ['./show-job-offer.component.css']
})
export class ShowJobOfferComponent implements OnInit {

  isPostulationAchieved: boolean = false;

  jobOffer!: JobOffer;

  constructor(private store: Store, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(getJobOffer({id: id}));
      this.store.select(getJobOfferSelector).subscribe((data) => {
        this.jobOffer = data;
      })
    })
  }

  postuler() {
    console.log("postuler")
    this.isPostulationAchieved = true;
  }
}
