import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../authorization/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  logOut():void{
    this.auth.logout();
    this._router.navigate(['authorization'])
  }

}
