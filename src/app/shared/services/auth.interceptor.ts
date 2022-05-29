import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { catchError, Observable, Subscription, tap, throwError } from 'rxjs';
import { AuthenticationService } from '../../authorization/services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private _auth: AuthenticationService,
    private _router: Router) {

    }

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._auth.isAuthenticated()){
            const newHeaders:HttpHeaders = new HttpHeaders();
            newHeaders.set('Authorization',`Bearer ${this._auth.token}`);
            req = req.clone({
                setParams: {
                    auth: this._auth.token
                }, headers:newHeaders
            });
        }

        return next.handle(req)
            .pipe(
                tap(()=>{
                    console.log('untersept');
                }),
                catchError((error: HttpErrorResponse) =>{
                    console.log('sdjfkj',error);
                    if (error.status === 401){
                        this._auth.logout();
                        this._router.navigate(['/authorization'], {
                            queryParams: {
                                authFailed : true
                            }
                        });
                    }

                    return throwError(()=>error);
                }));
    }


}
