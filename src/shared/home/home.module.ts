import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {ComponentsModule} from "../components/components.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
