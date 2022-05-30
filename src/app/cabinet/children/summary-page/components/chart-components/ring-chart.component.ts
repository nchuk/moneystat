import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { INewTransaction, IValue } from '../../../../../shared/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { GetTransactionArrayService } from '../../../../services/get-transaction-array.service';

@Component({
    selector: 'app-ring-chart',
    templateUrl: './ring-chart.components.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRingChartComponent implements OnInit,OnDestroy{

    public transactionSub!: Subscription;
    @Input()  public transactions! : INewTransaction[];
    public value!: number;
    public values!:number[];
    public category!:string;

    constructor(private _transactionService: TransactionService,
                private _getArrService:GetTransactionArrayService) {

    }


  ngOnInit(): void {
    this.getValues();
  }

  public getValues():void{
      this.transactionSub = this._transactionService.transactionSubject
        .subscribe((transaction:INewTransaction[])=>{
          this.values = this._getArrService.getArray(transaction)[0];
        })

  }

  public getTransaction(index:number):void{
        this.transactionSub = this._transactionService.transactionSubject
            .subscribe((transactions: INewTransaction[]) => {
               this._getArrService.getArray(transactions);
               this.value = this._getArrService.getValue(index);
               this.category = this._getArrService.getLabel(index);

            });
    }


    getValue(index: number): number {
        this.getTransaction(index);

        return this.value;
    }


    getLabel(index: number): string {
      this.getTransaction(index);

      return this.category;
    }



    public ngOnDestroy():void {
        if (this.transactionSub){
            this.transactionSub.unsubscribe();
        }
    }


}
