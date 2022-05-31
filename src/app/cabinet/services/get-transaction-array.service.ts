import { Injectable } from '@angular/core';
import { INewTransaction } from '../../shared/interfaces/interfaces';

@Injectable({
    providedIn:'root'
})
export class GetTransactionArrayService{
    public values:number[] =[];
    public categories:string[]=[];

    public getArray(transactions:INewTransaction[]):[number[],string[]]{
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].type === 'Расходы'){
                this.values[i]=transactions[i].sum;
                this.categories[i]=transactions[i].categories;
            }

        }

        return [this.values,this.categories];
    }


    public sum(values:number[]):number{
        let resultSum:number = 0;
        for (let i = 0; i < values.length; i++) {
            resultSum+=Number(values[i]);
        }

        return resultSum;
    }

    getValue(index: number): number {
        return Number.isNaN(index) ? this.sum(this.values) : this.values[index];
    }


    getLabel(index: number): string{
        return Number.isNaN(index) ? 'Total' : this.categories[index];
    }


}
