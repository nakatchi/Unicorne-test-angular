import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Unicorn } from "../common/objects/unicorn";

@Injectable({
    providedIn: 'root',
})
export class Mates {
    nextUnicorn?: Unicorn;
}

@Injectable({
    providedIn: 'root',
})
export class CanActivateMate implements CanActivate {
    constructor(
        private mate: Mates,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.mate.nextUnicorn) {
            return true;
        } else {
            return this.router.navigate(['/home']);
        }

    }
}


