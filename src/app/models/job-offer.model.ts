import {Company} from "./company.model";

export interface JobOffer{
  id: number;
  title: string;
  description: string;
  salary: number;
  location: string;
  status: string;
  profile: string;
  createdAt: string;
  city: string;
  educationLevel: string;
  company: Company;
}
export interface JobOfferModel{
  list: JobOffer[];
  jobOffer: JobOffer;
  errorMessage: string;
}
