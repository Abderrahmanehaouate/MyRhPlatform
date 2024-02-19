import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/enviroments";
import {AppUser} from "../models/appUser.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<AppUser> {
    return this.http.post<AppUser>(`${environment.apiUrl}/login`, {email, password});
  }
}
