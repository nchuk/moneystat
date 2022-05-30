import { Component, OnDestroy, OnInit } from '@angular/core';
import { INewTransaction } from '../../../../../shared/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { TransactionService } from '../../../../services/transaction.service';

@Component({
    selector: 'app-list-trsnsaction',
    templateUrl: './list-trsnsaction.component.html',
    styleUrls: ['./list-trsnsaction.component.scss']
})
export class ListTrsnsactionComponent implements OnInit,OnDestroy {

    public transactions!:INewTransaction[];
    public sub!: Subscription;
    public searchSum!:number;
    public category:string='';
    public categories: string[] = ['Продукты','Одежда','Развлечения','Автомобиль'];

    constructor(private _transactionService: TransactionService) { }

    ngOnInit(): void {
        this.sub = this._transactionService.getTransaction().subscribe(transaction=>{
            this.transactions = transaction;
        });
    }

    ngOnDestroy() {
        if(this.sub){
            this.sub.unsubscribe();
        }
    }

}
