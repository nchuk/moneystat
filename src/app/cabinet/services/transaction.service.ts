import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFbCreateResponse, INewTransaction } from '../../shared/interfaces/interfaces';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn:'root' })
export class TransactionService {

    public readonly labels:string[] = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];
    public readonly value:number[] = [13769, 12367, 10172, 3018, 2592];
    public readonly sum:number = this.value.reduce(function(sum:number, elem:number) {
        return sum + elem;
    }, 0);


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
