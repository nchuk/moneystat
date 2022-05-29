import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authorization/services/authentication.service';
import { AuthGuard } from './shared/services/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TuiRootModule} from "@taiga-ui/core";

const interceptorProvider : Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
};
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TuiRootModule,
    ],
    providers: [AuthenticationService, AuthGuard, interceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
