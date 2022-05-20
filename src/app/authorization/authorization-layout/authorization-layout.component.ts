import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { EntranceComponent } from '../modal/entrance/entrance.component';
import { RegistrationComponent } from '../modal/registration/registration.component';

@Component({
    selector: 'app-authorization-layout',
    templateUrl: './authorization-layout.component.html',
    styleUrls: ['./authorization-layout.component.scss']
})
export class AuthorizationLayoutComponent implements OnInit{
    public message: string | undefined;
  @ViewChild('dynamic',{ read: ViewContainerRef })
    private _viewRef!: ViewContainerRef;
  private _componentRef!: ComponentRef<EntranceComponent|RegistrationComponent>;

  constructor( private _route: ActivatedRoute,
               public auth: AuthenticationService,
  ) {
  }

  public showDynamicComponent(type:string):void{

      this._viewRef.clear();
      switch (type){
          case 'entrance':
              this._componentRef = this._viewRef.createComponent(EntranceComponent);
              break;
          case 'registration':
              this._componentRef = this._viewRef.createComponent(RegistrationComponent);
              break;
      }

  }

  public removeDynamicComponent(): void{
      this._viewRef.clear();
  }


  public ngOnInit(): void {
      this._route.queryParams.subscribe((params:Params) => {
          if (params['loginAgain']){
              this.message = 'Авторизуйтесь';
          } else if (params['authFailed']) {
              this.message = 'Сессия истекла войдите заново';
          }
      });
  }


}
