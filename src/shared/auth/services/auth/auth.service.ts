import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../../../models/user";
import {SignUpModel} from "../../../models/signup";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3001/auth/';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  login(username: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}login/`, {username, password});
  }

  signUp(data: SignUpModel): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}signup/`, {...data})
  }


}
