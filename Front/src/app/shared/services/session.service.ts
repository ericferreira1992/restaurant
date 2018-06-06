import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
    private usuario: any = null;

    constructor() { }

    setUsuario(usr: any) { this.usuario = usr; }

    getUsuario(): any { return this.usuario; }

    get isLogado(): Boolean { return this.usuario != null; }

    logout(){ this.usuario = null; }
}
