import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import {UserRoutingModule} from "./user-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ComponentsModule} from "../components/components.module";
import { CreateUserComponent } from './create-user/create-user.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { DetailUserComponent } from './detail-user/detail-user.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ComponentsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class UserModule { }
