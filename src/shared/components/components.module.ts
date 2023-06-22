import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../auth/components/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignupFormComponent } from '../auth/components/signup-form/signup-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    MatListModule
  ]
})
export class ComponentsModule { }
