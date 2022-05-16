import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../authorization/services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private auth:AuthenticationService,
    private router: Router)
  { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{
   if (this.auth.isAuthenticated()){
     return true
   } else {
     this.auth.logout();
     this.router.navigate(['/authorization'],{
       queryParams: {
         loginAgain: true
       }
     })
     return false
   }
  }

}
