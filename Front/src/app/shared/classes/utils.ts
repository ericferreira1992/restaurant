import { Injectable, ViewContainerRef } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Global } from '../../core/global';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Injectable()
export class Utils {
    constructor(private sessionService: SessionService,
                public g: Global,
                private router: Router,
                public toast: ToastsManager)
    {}

    showError(error, ngToast?: ToastsManager){
        if(!ngToast){
            this.toast.setRootViewContainerRef(this.g.rootView);
            ngToast = this.toast;
        }

        let objError = error.error;

        if(error.status > 0){
            if(objError !== null)
            {
                if(typeof objError === 'object')
                {
                    if('message' in objError){
                        if(error.status == 401 || error.status === undefined){
                            if(objError.message !== 'Authorization has been denied for this request.')
                                ngToast.error(objError.message, 'Ops!');
                            else{
                                ngToast.error('Sua sessão expirou ou o acesso foi negado. Faça o login novamente.', 'Ops!');
                                this.sessionService.logout();
                                this.router.navigate(['/login']);
                            }
                        }
                        else
                            ngToast.error(objError.message, 'Ops!');
                    }
                }
                else
                    ngToast.error(objError, 'Ops!');
            }
            else
                ngToast.error('Ocorreu um erro ao realizar esta operação.', 'Ops!');
        }
        else
            ngToast.error('Não foi possível conectar-se ao servidor.', 'Ops!');
    }
    
    public semAcentos(texto) {
        if (!texto) return texto;
        return texto.toString()
                        .replace(/[á|ã|â]/g, 'a')
                        .replace(/[é|ê]/g, 'e')
                        .replace(/í/g, 'i')
                        .replace(/[ó|õ|ô]/g, 'o')
                        .replace(/ú/g, 'u')
                        .replace(/ñ/g, 'n')
                        .replace(/ç/g, 'c');
    };
}
