import {
  Component,
  ComponentRef,
  EventEmitter, Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AuthenticationService } from '../../../authorization/services/authentication.service';
import { Router } from '@angular/router';
import { ModalTransactionComponent } from './components/transaction/modal-transaction/modal-transaction.component';
import { TransactionService } from '../../services/transaction.service';
import { INewTransaction } from '../../../shared/interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-summary-page',
    templateUrl: './summary-page.component.html',
    styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent {

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Input() type!:string;
    @ViewChild('dynamic',{ read: ViewContainerRef })
    private _viewRef!: ViewContainerRef;
    private _componentRef!: ComponentRef<ModalTransactionComponent>;


    constructor(private _auth: AuthenticationService,
              private _router: Router,
              private _transactionService: TransactionService) { }



    public showDynamicComponent(type: string):void{
        this._viewRef.clear();
        this._componentRef = this._viewRef.createComponent(ModalTransactionComponent);
        this.type = type;
    }

    public removeDynamicComponent(): void{
        this._viewRef.clear();
    }


}
