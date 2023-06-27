import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {SignUpModel} from "../../models/signup";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'zs-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  formGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.minLength(6)]))
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  getErrorMessage(control: AbstractControl) {
    if (control.hasError('required')) {
      return 'Esse campo é obrigatório.';
    }
    if (control.hasError('email')) {
      return 'Preencha o campo com um e-mail válido.'
    }
    return control.hasError('minlength') ? 'O valor inserido é muito curto.' : '';
  }

  createUser() {
    const user= new User({email: this.formGroup.value.email!, password: this.formGroup.value.password!});
    this.userService.create(user).subscribe((user) => {
      return this.router.navigate(['user/']);
    });
  }

}
