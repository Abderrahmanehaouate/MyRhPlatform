import {Injectable} from "@angular/core";
import {JobOfferService} from "../../services/job-offer.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  getJobOffer,
  getJobOfferSuccess,
  loadJobOffers,
  loadJobOffersFailure,
  loadJobOffersSuccess
} from "./job-offer.actions";
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";

@Injectable()
export class JobOfferEffects {
  constructor(private actions$: Actions, private jobOfferService: JobOfferService) {
  }
  loadJobOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJobOffers),
      exhaustMap((action) =>{
        return this.jobOfferService.getJobOffers().pipe(
          map((data) => {
            // @ts-ignore
            return loadJobOffersSuccess({list: data.content})
          }),
          catchError((error) => {
            return of(loadJobOffersFailure({errorMessage: error.message}))
          }))
  })))

  getJobOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getJobOffer),
      switchMap((action) => {
        return this.jobOfferService.getJobOfferById(action.id).pipe(
          map((data) => {
            return getJobOfferSuccess({jobOffer: data})
          }),
          catchError((error) => {
            return of(loadJobOffersFailure({errorMessage: error.message}))
          }))
      })))
}
