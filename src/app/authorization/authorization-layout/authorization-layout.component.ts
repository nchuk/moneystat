import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {EntranceComponent} from "../modal/entrance/entrance.component";
import {RegistrationComponent} from "../modal/registration/registration.component";

@Component({
  selector: 'app-authorization-layout',
  templateUrl: './authorization-layout.component.html',
  styleUrls: ['./authorization-layout.component.scss']
})
export class AuthorizationLayoutComponent implements OnInit{
  public message: string | undefined;
  @ViewChild('dynamic',{read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<EntranceComponent|RegistrationComponent>;

  constructor( private _route: ActivatedRoute,
               public auth: AuthenticationService,
              ) {
  }

  showDynamicComponent(type:string):void{

    this.viewRef.clear();
    switch (type){
      case 'entrance':
        this.componentRef = this.viewRef.createComponent(EntranceComponent);
        break
      case 'registration':
        this.componentRef = this.viewRef.createComponent(RegistrationComponent);
        break
    }

  }

  removeDynamicComponent(): void{
    this.viewRef.clear();
  }


  ngOnInit(): void {
    this._route.queryParams.subscribe((params:Params) => {
      if (params['loginAgain']){
        this.message = 'Авторизуйтесь'
      }
    })
  }


}
