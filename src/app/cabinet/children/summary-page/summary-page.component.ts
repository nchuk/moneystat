import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../../../authorization/services/authentication.service';
import { Router } from '@angular/router';
import { ModalTransactionComponent } from './components/transaction/modal-transaction/modal-transaction.component';

@Component({
    selector: 'app-summary-page',
    templateUrl: './summary-page.component.html',
    styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent {

  @ViewChild('dynamic',{ read: ViewContainerRef })
    private _viewRef!: ViewContainerRef;
  private _componentRef!: ComponentRef<ModalTransactionComponent>;

  constructor(private _auth: AuthenticationService,
              private _router: Router) { }

  public showDynamicComponent():void{
      this._viewRef.clear();
      this._componentRef = this._viewRef.createComponent(ModalTransactionComponent);

  }

  public removeDynamicComponent(): void{
      this._viewRef.clear();
  }

}
