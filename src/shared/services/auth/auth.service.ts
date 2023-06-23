import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {SignUpModel} from "../../models/signup";
import {Credentials} from "../../models/credentials";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3001/auth/';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  login(username: string, password: string): Observable<Credentials> {
    return this.httpClient.post(`${this.apiUrl}login/`, {username, password})
      .pipe(
        map((response: any) => {
          return new Credentials({
            accessToken: response?.access,
            refreshToken: response?.refresh
          })
        }),
        tap((credentials) => this.setSession(credentials))
      );
  }

  signUp(data: SignUpModel): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}signup/`, {...data})
  }

  setSession(credentials: Credentials): void {
    localStorage.setItem('accessToken', credentials.accessToken);
    localStorage.setItem('refreshToken', credentials.refreshToken);
    localStorage.setItem('accessTokenExpiration', JSON.stringify(credentials.accessTokenExpiration));
    localStorage.setItem('refreshTokenExpiration', JSON.stringify(credentials.refreshTokenExpiration));
  }

  isAuthorized(): boolean {
    const credentials = new Credentials().fromLocalStorage();
    return !!credentials.accessToken && credentials.accessTokenExpiration.getTime() > new Date(Date.now()).getTime();
  }


}
