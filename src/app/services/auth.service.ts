import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/login`, {email, password});
  }

}
