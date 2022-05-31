import { Component } from '@angular/core';
import {AuthenticationService} from "../../authorization/services/authentication.service";

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent  {

    constructor(private _auth:AuthenticationService) { }

  public logout(){
      this._auth.logout();
  }
}
