import { Injectable } from '@angular/core';
import { SessionService } from './../session.service';
import { HttpService } from '../http.service';

export abstract class BaseWebApi {
    protected prefixo: String = '';

    constructor(protected httpService: HttpService,
                protected sessionService: SessionService) { }

    listar(sucessoCallback, erroCallback) {
        return this.httpService.get(this.prefixo, sucessoCallback, erroCallback);
    };

    selecionarPorId(id: number, sucessoCallback, erroCallback) {
        return this.httpService.get(this.prefixo + '/' + id, sucessoCallback, erroCallback);
    };

    incluir(objeto, sucess?, error?) {
        return this.httpService.post(this.prefixo, objeto, sucess, error);
    };

    alterar(objeto, sucess?, error?) {
        return this.httpService.put(this.prefixo, objeto, sucess, error);
    };

    excluir(id: number, sucessoCallback, erroCallback) {
        return this.httpService.del(this.prefixo + '/' + id, sucessoCallback, erroCallback);
    };

}
