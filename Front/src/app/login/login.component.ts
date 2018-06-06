import { Component, OnInit, ViewContainerRef, Inject, forwardRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { UsuarioWebApi } from './../shared/services/webapi/usuario-webapi.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Utils } from '../shared/classes/utils';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public usuario: any = {
        usuario: '',
        senha: ''
    };

    public loading: boolean = false;

    constructor(@Inject(forwardRef(() => AppComponent)) public parent: AppComponent,
                public toast: ToastsManager, 
                public vcr: ViewContainerRef,
                private utils: Utils,
                private usuarioWebApi: UsuarioWebApi,
                private router: Router)
    {
        this.toast.setRootViewContainerRef(this.parent.vcr);

        this.usuario.login = 'eric';
        this.usuario.senha =  'senha';
    }

    ngOnInit()
    { }

    enviar()
    {
        if(this.usuario.login && this.usuario.senha)
        {
            this.loading = true;
            this.usuarioWebApi.autenticar(this.usuario.login, this.usuario.senha,
                (data) => {
                    this.toast.success('Bem vindo, <strong>' + this.usuario.login+ '</strong>!');
                    this.router.navigate(['/principal/inicio']);
                    this.loading = false;
                },
                (error, status) => {
                    this.loading = false;
                    this.utils.showError(error, this.toast);
                });
        }
        else
            this.toast.error('Informe o usuário e senha.');
    }
}
