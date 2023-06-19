import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from "rxjs";
import {Credentials} from "../../models/credentials";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3001/users/';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getMe() {
    return this.httpClient.get(`${this.apiUrl}me/`)
      .pipe(
        map((response: any) => {
          return new User({...response})
        }),
      );
  }
}
