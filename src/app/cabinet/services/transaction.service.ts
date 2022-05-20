import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFbCreateResponse, INewTransaction } from '../../shared/interfaces/interfaces';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn:'root' })
export class TransactionService {
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
}
