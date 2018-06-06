import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurante } from '../../../entities/restaurante';
import { RestauranteWebApi } from '../../../shared/services/webapi/restaurante-webapi.service';
import { Utils } from '../../../shared/classes/utils';
import { ToastsManager } from 'ng2-toastr';
import { Global } from '../../../core/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'restaurante-manutencao-app',
  templateUrl: './restaurante-manutencao.component.html'
})
export class RestauranteManutencaoComponent  implements OnInit {
    @ViewChild('frm') frm: NgForm;
    public get frmCtrls(): any { return this.frm ? this.frm.controls : {}; };

    private params: Params;
    public loading: Boolean = true;

    public restaurante: Restaurante = new Restaurante();

    constructor(private restauranteWebApi: RestauranteWebApi,
                private toast: ToastsManager,
                private route: ActivatedRoute,
                private router: Router,
                private utils: Utils,
                public g: Global)
    {
        this.toast.setRootViewContainerRef(this.g.rootView);
    }

    ngOnInit() {
        this.params = this.route.snapshot.params;
        this.get(this.params.id);
    }

    get(id: number): void{
        if(id > 0){
            this.loading = true;
            this.restauranteWebApi.selecionarPorId(id, (data: Restaurante) => 
            { 
                this.restaurante = data;
                this.loading = false;
            }, 
            (error) => 
            {
                this.loading = false;
                this.utils.showError(error, this.toast);
            });
        }
        else{
            this.loading = false;
            this.restaurante = new Restaurante();
        }
    }

    validar(): Boolean{
        if(!this.restaurante.nome) return false;
        return true;
    }

    touchControls(){
        for(let property in this.frm.controls)
            this.frm.controls[property].markAsTouched();
    }

    salvar(){
        this.touchControls();
        if(this.validar()){
            this.loading = true;
            
            if(this.restaurante.id > 0)
                this.restauranteWebApi.alterar(this.restaurante, () => 
                { 
                    this.toast.success('Restaurante editado!');
                    this.router.navigate(['/principal/restaurante/listar']);
                    this.loading = false;
                }, 
                (error) => 
                {
                    this.loading = false;
                    this.utils.showError(error, this.toast);
                });
            else
                this.restauranteWebApi.incluir(this.restaurante, () => 
                { 
                    this.toast.success('Restaurante cadastrado!');
                    this.router.navigate(['/principal/restaurante/listar']);
                    this.loading = false;
                }, 
                (error) => 
                {
                    this.loading = false;
                    this.utils.showError(error, this.toast);
                });
        }
    }
}