import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../servicios/login.service";


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private router: Router,
        private loginService: LoginService
    ) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        let token = this.loginService.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}