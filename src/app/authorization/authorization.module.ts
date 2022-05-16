import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AuthorizationLayoutComponent} from "./authorization-layout/authorization-layout.component";
import {EntranceComponent} from './modal/entrance/entrance.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./services/authentication.service";
import {SharedModule} from "../shared/module/shared.module";
import { RegistrationComponent } from './modal/registration/registration.component';



@NgModule({
  declarations:[
    AuthorizationLayoutComponent,
    EntranceComponent,
    RegistrationComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild
    ([{path:'',component:AuthorizationLayoutComponent}])
  ],
  providers:[AuthenticationService]
})

export class AuthorizationModule{}
