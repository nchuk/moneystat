import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { INewTransaction } from '../../../../../shared/interfaces/interfaces';

@Component({
    selector: 'app-list-transaction',
    templateUrl: './list-transaction.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class  ListTransactionComponent{

    @Input() public transactions!:INewTransaction[];

    constructor(private _transactionService: TransactionService) {

    }


}
