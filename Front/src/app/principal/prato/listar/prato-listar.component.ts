import { Component, ViewChild, Inject, forwardRef, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prato } from '../../../entities/prato';
import { PratoWebApi } from '../../../shared/services/webapi/prato-webapi.service';
import { Utils } from '../../../shared/classes/utils';
import { ToastsManager } from 'ng2-toastr';
import { Global } from '../../../core/global';
import { Router } from '@angular/router';
import { Restaurante } from '../../../entities/restaurante';
import { PratoComponent } from '../prato.component';
import { Confirm } from '../../../shared/services/confirm/confirm.service';

@Component({
  selector: 'prato-listar-app',
  templateUrl: './prato-listar.component.html',
  providers: [
      { provide: Window, useValue: window }  
  ]
})
export class PratoListarComponent {
    @ViewChild('frm') frm: NgForm;

    public loading: Boolean = true;

    public filtro: Prato = new Prato();
    public pratos: Prato[] = new Array<Prato>();
    public restaurantes: Restaurante[] = new Array<Restaurante>();

    constructor(@Inject(forwardRef(() => PratoComponent)) private parent: PratoComponent,
                @Inject(Window) public window: Window,
                private vrc: ViewContainerRef,
                private pratoWebApi: PratoWebApi,
                private toast: ToastsManager,
                private router: Router,
                private utils: Utils,
                public g: Global,
                private confirm: Confirm)
    {
        this.confirm.setRootVcr(this.g.rootView);
        this.toast.setRootViewContainerRef(this.g.rootView);
        this.restaurantes = this.parent.restaurantes;
        this.listar();
    }

    listar(){
        this.loading = true;
        this.pratoWebApi.listar((data: Prato[]) => 
        { 
            this.pratos = data;
            this.loading = false;
        }, 
        (error) => 
        {
            this.loading = false;
            this.utils.showError(error, this.toast);
        });
    }

    excluir(prato: Prato){
        this.confirm.show(`Deseja realmente excluir o prato <strong>${prato.nome}</strong>?`, () => {
            this.loading = true;
            this.pratoWebApi.excluir(prato.id, (data: Prato[]) => 
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
        if(id > 0) this.router.navigate(['/principal/prato/' + id]);
        else this.router.navigate(['/principal/prato']);
    }
}