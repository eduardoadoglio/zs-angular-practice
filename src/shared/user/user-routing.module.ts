import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListUsersComponent} from "./list-users/list-users.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";
import {detailUserResolver} from "./detail-user/resolver/detail-user.resolver";

const routes: Routes = [
  {path: '', component: ListUsersComponent},
  {path: 'create', component: CreateUserComponent},
  {path: ':userId', component: DetailUserComponent, resolve: {user: detailUserResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
