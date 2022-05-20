import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFireBaseResponse, IUser } from '../../shared/interfaces/interfaces';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    public error$: Subject<string> = new Subject<string>();

    constructor(private _http: HttpClient) {

    }

    public get token(): string {
        const expDate: Date = new Date(localStorage.getItem('token-exp')!);
        if (new Date() > expDate) {
            this.logout();

            return '';
        }

        return localStorage.getItem('token')!;
    }

    public login(user: IUser): Observable<IFireBaseResponse> {
        user.returnSecureToken = true;

        return this._http.post<IFireBaseResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
            .pipe(
                tap((response:IFireBaseResponse) => {
                    this.setToken(response);
                }),
                //@ts-ignore
                catchError(this.handleError.bind(this))
            );
    }

    public registration(user: IUser): Observable<IFireBaseResponse>{
        return this._http.post<IFireBaseResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,user)
            .pipe(
                tap((response:IFireBaseResponse) => {
                    this.setToken(response);
                }),
                //@ts-ignore
                catchError(this.handleError.bind(this))
            );
    }

    public logout(): void {
        this.setToken(null);
    }

    public isAuthenticated(): boolean {
        return !!this.token;
    }

    private setToken(response: IFireBaseResponse | null): void {
        if (response) {
            const expDate: Date = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('token', response.idToken);
            localStorage.setItem('token-exp', expDate.toString());
        } else {
            localStorage.clear();
        }
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        const { message }:HttpErrorResponse = error.error.error;

        switch (message) {
            case 'INVALID_PASSWORD':
                this.error$.next('Неверный пароль');
                break;
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Email не найден, зарегистрируйтесь');
                break;
            case 'EMAIL_EXISTS':
                this.error$.next('Почта уже существвует');
                break;
        }

        return  throwError(()=>error);
    }

}
