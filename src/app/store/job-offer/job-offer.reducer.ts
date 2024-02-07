import {JobOfferState} from "./job-offer.state";
import {createReducer, on} from "@ngrx/store";
import {getJobOfferSuccess, loadJobOffersFailure, loadJobOffersSuccess} from "./job-offer.actions";


export const _JobOfferReducer = createReducer(JobOfferState,
  on(loadJobOffersSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      errorMessage: ''
    }
  }),
  on(loadJobOffersFailure, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage
    }
  }),
  on(getJobOfferSuccess, (state, action) => {
    return {
      ...state,
      jobOffer: action.jobOffer,
      errorMessage: ''
    }
  }),
)

export function JobOfferReducer(state: any, action: any) {
  return _JobOfferReducer(state, action);
}
