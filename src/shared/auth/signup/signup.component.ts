import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {SignUpModel} from "../../models/signup";

@Component({
  selector: 'zs-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private authService: AuthService) {
  }

  signup(data: FormGroup) {
    const formData = new SignUpModel(data.value);
    this.authService.signUp(formData).subscribe((user) => {
      console.log(user);
    });
  }
}
