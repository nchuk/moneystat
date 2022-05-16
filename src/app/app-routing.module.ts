import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/auth.guard";


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./cabinet/cabinet.web.module').then(m => m.CabinetWebModule),
    canActivate:[AuthGuard]
  },
  {
    path:'authorization',
    loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
