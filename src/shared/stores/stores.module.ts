import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromUser from "./user/user.reducer";
import {StoreModule} from "@ngrx/store";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({user: fromUser.reducer})
  ]
})
export class StoresModule { }
