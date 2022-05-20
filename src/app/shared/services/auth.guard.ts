import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authorization/services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
    private _auth:AuthenticationService,
    private _router: Router)
    { }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        if (this._auth.isAuthenticated()){
            return true;
        } else {
            this._auth.logout();
            this._router.navigate(['/authorization'],{
                queryParams: {
                    loginAgain: true
                }
            });

            return false;
        }
    }

}
