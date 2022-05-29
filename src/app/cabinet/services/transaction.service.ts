import {Injectable, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFbCreateResponse, INewTransaction } from '../../shared/interfaces/interfaces';
import {map, Observable, Subscription} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn:'root' })
export class TransactionService {

    public expenses!: number;
    public income!:number;
    public balance!:number;
    public transaction!: INewTransaction[];
    public transactionSub!: Subscription;

    constructor(private _http:HttpClient) {
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
            }));
    }


}
