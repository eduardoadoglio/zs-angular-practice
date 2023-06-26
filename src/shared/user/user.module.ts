import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import {UserRoutingModule} from "./user-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [
    ListUsersComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        ComponentsModule
    ]
})
export class UserModule { }
