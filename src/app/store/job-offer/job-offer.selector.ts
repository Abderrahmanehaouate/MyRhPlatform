import {createFeatureSelector, createSelector} from "@ngrx/store";
import {JobOfferModel} from "../../models/job-offer.model";

const getJobOfferState = createFeatureSelector<JobOfferModel>('jobOffer');

export const getJobOffersSelector = createSelector(getJobOfferState,
  (state) =>{
    return state.list
  }
);

export const getJobOfferSelector = createSelector(getJobOfferState,
  (state) =>{
    return state.jobOffer
  }
);

