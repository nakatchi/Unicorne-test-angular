import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Unicorn } from "../common/objects/unicorn";

@Injectable({
    providedIn: 'root',
})
export class DoBaby {
    firstUnicorn?: Unicorn;
    secondUnicorn?: Unicorn;
}

@Injectable({
    providedIn: 'root',
})
export class CanActivateBaby implements CanActivate {
    constructor(
        private baby: DoBaby,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.baby.firstUnicorn && this.baby.secondUnicorn) {
            return true;
        } else {
            return this.router.navigate(['/home']);
        }

    }
}


