import { Component, ViewChild, Inject, forwardRef, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurante } from '../../../entities/restaurante';
import { RestauranteWebApi } from '../../../shared/services/webapi/restaurante-webapi.service';
import { Utils } from '../../../shared/classes/utils';
import { ToastsManager } from 'ng2-toastr';
import { Global } from '../../../core/global';
import { Router } from '@angular/router';
import { PrincipalComponent } from '../../principal.component';
import { Confirm } from '../../../shared/services/confirm/confirm.service';

@Component({
  selector: 'restaurante-listar-app',
  templateUrl: './restaurante-listar.component.html',
  providers: [
      { provide: Window, useValue: window }  
  ]
})
export class RestauranteListarComponent {
    @ViewChild('frm') frm: NgForm;

    public loading: Boolean = true;

    public filtro: Restaurante = new Restaurante();
    public restaurantes: Restaurante[] = new Array<Restaurante>();

    constructor(private vrc: ViewContainerRef,
                @Inject(Window) public window: Window,
                private restauranteWebApi: RestauranteWebApi,
                private toast: ToastsManager,
                private router: Router,
                private utils: Utils,
                public g: Global,
                private confirm: Confirm)
    {
        this.confirm.setRootVcr(this.g.rootView);
        this.toast.setRootViewContainerRef(this.g.rootView);
        this.listar();
    }

    listar(){
        this.loading = true;
        this.restauranteWebApi.listar((data: Restaurante[]) => 
        { 
            this.restaurantes = data;
            this.loading = false;
        }, 
        (error) => 
        {
            this.loading = false;
            this.utils.showError(error, this.toast);
        });
    }

    excluir(restaurante: Restaurante){
        this.confirm.show(`Deseja realmente excluir o restaurante <strong>${restaurante.nome}</strong>?`, () => {
            this.loading = true;
            this.restauranteWebApi.excluir(restaurante.id, (data: Restaurante[]) => 
            { 
                this.listar();
                this.toast.success('Registro excluído.');
            }, 
            (error) => 
            {
                this.loading = false;
                this.utils.showError(error, this.toast);
            });
        });
    }

    goManutencao(id: number){
        if(id > 0) this.router.navigate(['/principal/restaurante/' + id]);
        else this.router.navigate(['/principal/restaurante']);
    }
}