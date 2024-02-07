import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/enviroments";
import {Observable} from "rxjs";
import {JobOffer} from "../models/job-offer.model";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  constructor(private http:HttpClient) {
  }

  getJobOffers():Observable<JobOffer[]>{
    return this.http.get<JobOffer[]>(`${environment.apiUrl}/jobOffers`);
  }
  getJobOfferById(id:number):Observable<JobOffer>{
    return this.http.get<JobOffer>(`${environment.apiUrl}/jobOffers/${id}`);
  }
  addJobOffer(jobOffer:JobOffer):Observable<JobOffer>{
    return this.http.post<JobOffer>(`${environment.apiUrl}/jobOffers`,jobOffer);
  }
  deleteJobOffer(id:number):Observable<any>{
    return this.http.delete(`${environment.apiUrl}/jobOffers/${id}`);
  }
  updateJobOffer(jobOffer:JobOffer):Observable<JobOffer>{
    return this.http.put<JobOffer>(`${environment.apiUrl}/jobOffers/${jobOffer.id}`,jobOffer);
  }
}
