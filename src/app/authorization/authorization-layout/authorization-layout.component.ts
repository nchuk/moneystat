import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {EntranceComponent} from "../modal/entrance/entrance.component";
import {RegistrationComponent} from "../modal/registration/registration.component";

@Component({
  selector: 'app-authorization-layout',
  templateUrl: './authorization-layout.component.html',
  styleUrls: ['./authorization-layout.component.scss']
})
export class AuthorizationLayoutComponent  {
  @ViewChild('dynamic',{read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<EntranceComponent>

  showDynamicComponent():void{
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(EntranceComponent)
  }

  removeDynamicComponent(): void{
    this.viewRef.clear();
  }

  showDynamicComponentReg():void{
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(RegistrationComponent)
  }

}
