import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../../../services/user/user.service";
import {Observable} from "rxjs";
import {User} from "../../../models/user";

export const detailUserResolver: ResolveFn<Observable<User>> = (route, state): Observable<User> => {
  return inject(UserService).get(route.paramMap.get('userId')!);
};
