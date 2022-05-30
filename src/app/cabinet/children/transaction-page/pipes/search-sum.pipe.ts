import { Pipe, PipeTransform } from '@angular/core';
import { INewTransaction } from '../../../../shared/interfaces/interfaces';

@Pipe({
    name:'searchSum'
})
export class SearchSumPipe implements PipeTransform{
    transform(transactios:INewTransaction[],search:number): INewTransaction[] {
        if(!search){
            return transactios;
        }

        return transactios.filter((transaction:INewTransaction) =>{
            return transaction.sum === search;
        });
    }
}
