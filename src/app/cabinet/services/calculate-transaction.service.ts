import { Injectable } from '@angular/core';
import {ICategory, INewTransaction} from '../../shared/interfaces/interfaces';

@Injectable({
    providedIn:'root'
})
export class CalculateTransactionService{

    public expenses:number =0 ;
    public income:number = 0;
    public balance:number = 0;
    public arrCategories!:ICategory[];

    public calculateBalance(transactions:INewTransaction[]):number[]{
        for (let transaction:number = 0; transaction < transactions.length; transaction++) {
            switch (transactions[transaction].type){
                case 'Расходы':
                    this.expenses+=Number(transactions[transaction].sum);
                    break;
                case 'Доходы':
                    this.income+=Number(transactions[transaction].sum);
                    break;
            }
        }
        this.balance = this.income - this.expenses;

        return [this.expenses, this.income, this.balance];
    }

    // public calculateCategory(transaction:INewTransaction[]):ICategory[]{
    //     for (let i:number = 0; i < transaction.length; i++) {
    //         // @ts-ignore
    //         this.arrCategories[i]={
    //             'category':transaction[i].categories,
    //             'value':transaction[i].sum
    //         };
    //     }
    //
    //     return this.arrCategories;
    // }
}
