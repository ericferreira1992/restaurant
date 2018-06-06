import { Component, ViewChild, OnInit, Inject, forwardRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prato } from '../../../entities/prato';
import { PratoWebApi } from '../../../shared/services/webapi/prato-webapi.service';
import { Utils } from '../../../shared/classes/utils';
import { ToastsManager } from 'ng2-toastr';
import { Global } from '../../../core/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Restaurante } from '../../../entities/restaurante';
import { PratoComponent } from '../prato.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'prato-manutencao-app',
  templateUrl: './prato-manutencao.component.html'
})
export class PratoManutencaoComponent implements OnInit {
    @ViewChild('frm') frm: NgForm;
    public get frmCtrls(): any { return this.frm ? this.frm.controls : {}; };

    private params: Params;
    public loading: Boolean = true;

    public prato: Prato = new Prato();
    public restaurantes: Restaurante[] = new Array<Restaurante>();

    constructor(@Inject(forwardRef(() => PratoComponent)) private parent: PratoComponent,
                private pratoWebApi: PratoWebApi,
                private toast: ToastsManager,
                private route: ActivatedRoute,
                private router: Router,
                private utils: Utils,
                public g: Global,
                private currencyPipe: CurrencyPipe)
    {
        this.toast.setRootViewContainerRef(this.g.rootView);
        this.restaurantes = this.parent.restaurantes;
    }

    ngOnInit() {
        this.params = this.route.snapshot.params;
        this.get(this.params.id);
    }

    get(id: number): void{
        if(id > 0){
            this.loading = true;
            this.pratoWebApi.selecionarPorId(id, (data: Prato) => 
            { 
                this.prato = data;
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
            this.prato = new Prato();
        }
    }

    validar(): Boolean{
        if(!this.prato.nome) return false;
        if(!this.prato.restauranteId) return false;
        if(!this.prato.preco) return false;
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
            
            if(this.prato.id > 0)
                this.pratoWebApi.alterar(this.prato, () => 
                { 
                    this.toast.success('Prato editado!');
                    this.router.navigate(['/principal/prato/listar']);
                    this.loading = false;
                }, 
                (error) => 
                {
                    this.loading = false;
                    this.utils.showError(error, this.toast);
                });
            else
                this.pratoWebApi.incluir(this.prato, () => 
                { 
                    this.toast.success('Prato cadastrado!');
                    this.router.navigate(['/principal/prato/listar']);
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