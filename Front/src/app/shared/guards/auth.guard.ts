import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './../services/session.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private sessionService: SessionService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean
    {
        if(state.url == '/login' && this.sessionService.isLogado){
            this.router.navigate(['/principal/inicio']);
            return false;
        }
        if(state.url != '/login' && !this.sessionService.isLogado){
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
