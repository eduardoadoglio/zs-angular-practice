import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'zs-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  @Output() onSubmit = new EventEmitter<FormGroup>();

  formGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    confirm_password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
  });

  signup() {
    this.onSubmit.emit(this.formGroup);
  }
}
