import {
    ChangeDetectionStrategy,
    Component,
    ComponentRef,
    Input, OnDestroy, OnInit, Output,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { AuthenticationService } from '../../../authorization/services/authentication.service';
import { Router } from '@angular/router';
import { ModalTransactionComponent } from './components/transaction/modal-transaction/modal-transaction.component';
import { TransactionService } from '../../services/transaction.service';
import { INewTransaction } from '../../../shared/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CalculateTransactionService } from '../../services/calculate-transaction.service';


@Component({
    selector: 'app-summary-page',
    templateUrl: './summary-page.component.html',
    styleUrls: ['./summary-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SummaryPageComponent implements OnInit,OnDestroy{


    public transactions!: INewTransaction[];
    public transactionSub!: Subscription;
    public balance!:number[];
    @Input() public type!:string;
    @ViewChild('dynamic',{ read: ViewContainerRef })
    private _viewRef!: ViewContainerRef;
    private _componentRef!: ComponentRef<ModalTransactionComponent>;

    constructor(private _auth: AuthenticationService,
              private _router: Router,
              private _transactionService: TransactionService,
                private _calculateService:CalculateTransactionService) {


    }

    ngOnInit(): void {
        this.getTransactions();
    }


    public getTransactions():void{
        this.transactionSub = this._transactionService.transactionSubject
            .subscribe((transactions: INewTransaction[]) => {
                this.transactions = transactions;
                this.balance = this._calculateService.calculateBalance(this.transactions);
            });

    }


    public showDynamicComponent(type: string):void{
        this._viewRef.clear();
        this._componentRef = this._viewRef.createComponent(ModalTransactionComponent);
        this.type = type;

    }

    public removeDynamicComponent(): void{
        this._viewRef.clear();

    }

    ngOnDestroy(): void {
        this.transactionSub.unsubscribe();
    }



}
