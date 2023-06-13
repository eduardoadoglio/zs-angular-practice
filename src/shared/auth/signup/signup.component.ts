import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'zs-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private authService: AuthService) {
  }

  signup(data: FormGroup) {
    console.log(data.get("email")?.value);
  }
}
