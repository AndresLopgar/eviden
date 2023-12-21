import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { loginService } from "src/app/services/login-service";

@Injectable()
export class loginGuardian implements CanActivate{

    constructor(private loginService:loginService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.loginService.estaLogueado()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }

}