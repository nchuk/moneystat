import { Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFbCreateResponse, INewTransaction, IValue } from '../../shared/interfaces/interfaces';
import {BehaviorSubject, map, Observable, share, Subscription} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn:'root' })
export class TransactionService {

    public  transactions:INewTransaction[] =[];
    public transactionSubject:BehaviorSubject<INewTransaction[]> = new BehaviorSubject<INewTransaction[]>([]);

    constructor(private _http:HttpClient) {
        this.initialization();
    }

    public addTransaction(transaction: INewTransaction): Observable<INewTransaction>{
        return this._http.post<INewTransaction>(`${environment.fbDbUrl}/transaction.json`, transaction)
        // @ts-ignore
            .pipe(map((response: IFbCreateResponse) => {
                return {
                    ...transaction,
                    id: response.name,
                    date: new Date(transaction.date)
                };
            }));

    }

    public getTransaction (): Observable<INewTransaction[]>{
        return this._http.get(`${environment.fbDbUrl}/transaction.json`)
            .pipe(map((response:{[key:string]: any}) => {
                return Object
                    .keys(response)
                // eslint-disable-next-line @typescript-eslint/typedef
                    .map(key => ({
                        ...response[key],
                        id: key,
                        date: new Date(response[key].date)
                    }));
            })).pipe(share());
    }

    public initialization():void{
        this.getTransaction()
            .subscribe((transaction:INewTransaction[]) => {
                this.transactions = transaction;
                this.transactionSubject.next(transaction);
            });
    }
}
