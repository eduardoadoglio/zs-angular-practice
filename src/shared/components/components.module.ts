import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../auth/components/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignupFormComponent } from '../auth/components/signup-form/signup-form.component';



@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
