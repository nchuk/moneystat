import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { INewTransaction } from '../../../../../shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-list-transaction',
    templateUrl: './list-transaction.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class  ListTransactionComponent implements OnInit{

    public transactions$!: Observable<INewTransaction[]>;

    constructor(private _transactionService: TransactionService) {

    }

    public ngOnInit():void{
        this.transactions$ = this._transactionService.getTransaction();

    }



}
