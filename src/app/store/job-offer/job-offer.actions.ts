import {createAction, props} from "@ngrx/store";
import {JobOffer, JobOfferModel} from "../../models/job-offer.model";

export const LOAD_JOB_OFFERS = '[Job Offer] Load Job Offers';
export const LOAD_JOB_OFFERS_SUCCESS = '[Job Offer] Load Job Offers Success';
export const LOAD_JOB_OFFERS_FAILURE = '[Job Offer] Load Job Offers Failure';

export const ADD_JOB_OFFER = '[Job Offer] Add Job Offer';
export const ADD_JOB_OFFER_SUCCESS = '[Job Offer] Add Job Offer Success';
export const ADD_JOB_OFFER_FAILURE = '[Job Offer] Add Job Offer Failure';

export const GET_JOB_OFFER = '[Job Offer] Get Job Offer';
export const GET_JOB_OFFER_SUCCESS = '[Job Offer] Get Job Offer Success';

export const loadJobOffers = createAction(LOAD_JOB_OFFERS);
export const loadJobOffersSuccess = createAction(LOAD_JOB_OFFERS_SUCCESS,props<{list: JobOffer[]}>());
export const loadJobOffersFailure = createAction(LOAD_JOB_OFFERS_FAILURE,props<{errorMessage: string}>());

export const getJobOffer = createAction(GET_JOB_OFFER,props<{id: number}>());
export const getJobOfferSuccess = createAction(GET_JOB_OFFER_SUCCESS,props<{jobOffer: JobOffer}>());

export const addJobOffer = createAction(ADD_JOB_OFFER,props<{jobOffer: JobOffer}>());
export const addJobOfferSuccess = createAction(ADD_JOB_OFFER_SUCCESS,props<{jobOffer: JobOffer}>());
export const addJobOfferFailure = createAction(ADD_JOB_OFFER_FAILURE,props<{errorMessage: string}>());

