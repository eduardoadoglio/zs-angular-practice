import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
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

  get(id: string | number): Observable<User> {
    return this.httpClient.get(`${this.apiUrl}${id.toString()}/`)
      .pipe(
        map((response: any) => {
          return new User({...response})
        }),
      );
  }
  getMe() {
    return this.httpClient.get(`${this.apiUrl}me/`)
      .pipe(
        map((response: any) => {
          return new User({...response})
        }),
      );
  }

  list(): Observable<User[]> {
    return this.httpClient.get(this.apiUrl).pipe(
      map((users: any) => {
          try {
            return users.map((user: any) => new User({...user}))
          } catch (e) {
            return [];
          }
        }
      )
    );
  }

  create(user: User): Observable<User> {
    return this.httpClient.post(this.apiUrl, {
      'email': user.email,
      'password': user.password
    }).pipe(
      map((response: any) => {
        return new User({...response})
      })
    )
  }
}
