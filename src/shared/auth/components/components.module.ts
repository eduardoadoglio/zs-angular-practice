import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFormComponent} from "./login-form/login-form.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
