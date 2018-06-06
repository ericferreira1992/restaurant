import { Component, ViewContainerRef } from '@angular/core';
import { SessionService } from '../shared/services/session.service';
import { Router } from '@angular/router';
import { Restaurante } from '../entities/restaurante';
import { Utils } from '../shared/classes/utils';
import { RestauranteWebApi } from '../shared/services/webapi/restaurante-webapi.service';
import { Confirm } from '../shared/services/confirm/confirm.service';
import { Global } from '../core/global';

@Component({
  selector: 'principal-app',
  templateUrl: './principal.component.html'
})
export class PrincipalComponent{
    public loading: Boolean = false;

    constructor(public sessionService: SessionService,
                private vcr: ViewContainerRef,
                private router: Router,
                private utils: Utils,
                private confirm: Confirm,
                private g: Global)
    {
        confirm.setRootVcr(this.g.rootView);
        this.loading = false;
    }

    logout(){
        this.confirm.show('Deseja realmente sair?', () => {
            this.sessionService.logout();
            this.router.navigate(['/login']);
        });
    }

    sobre(){
        
    }
}
