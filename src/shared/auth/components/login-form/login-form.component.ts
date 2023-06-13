import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'zs-login-card',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() onSubmit = new EventEmitter<FormGroup>();

  formGroup = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
  });

  login() {
    this.onSubmit.emit(this.formGroup);
  }

}
