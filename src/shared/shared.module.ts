import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app/app-routing.module";

import * as fromUser from "./stores/user/user.reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
