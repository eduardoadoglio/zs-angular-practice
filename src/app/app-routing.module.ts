import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('../shared/auth/auth.module').then(m => m.AuthModule)},
  {path: 'home', loadChildren: () => import('../shared/home/home.module').then(m => m.HomeModule)},
  {path: 'user', loadChildren: () => import('../shared/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
