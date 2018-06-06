import { Component, ViewContainerRef } from '@angular/core';
import { Utils } from '../../shared/classes/utils';
import { RestauranteWebApi } from '../../shared/services/webapi/restaurante-webapi.service';
import { Restaurante } from '../../entities/restaurante';

@Component({
    selector: 'prato-app',
    template: `
        <spinner *ngIf="loading"></spinner>
        <router-outlet *ngIf="!loading"></router-outlet>
    `
})
export class PratoComponent {
    public loading: Boolean = true;
    public restaurantes: Restaurante[] = new Array<Restaurante>();

    constructor(private utils: Utils,
                private resturanteWebApi: RestauranteWebApi)
    {
        this.getRestaurantes();
    }

    getRestaurantes(){
        this.loading = true;
        this.resturanteWebApi.listar((data: Restaurante[]) => 
        { 
            this.restaurantes = data;
            this.loading = false;
        }, 
        (error) => 
        {
            this.loading = false;
            this.utils.showError(error);
        });
    }
}
