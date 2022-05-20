import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthorizationLayoutComponent } from './authorization-layout/authorization-layout.component';
import { EntranceComponent } from './modal/entrance/entrance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
        ReactiveFormsModule,
        RouterModule.forChild
        ([{ path:'',component:AuthorizationLayoutComponent }])
    ],
    providers:[]
})

export class AuthorizationModule{}
