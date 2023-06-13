import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'zs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  login(data: FormGroup) {
    const user = new User(data.value);
    this.authService.login(user.username, user.password).subscribe((user) => {
      console.log(user);
    });
  }

}
