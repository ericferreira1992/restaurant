import { Injectable } from "@angular/core";
import { SessionService } from "../session.service";
import { HttpService } from "../http.service";

@Injectable()
export class UsuarioWebApi{
    constructor(private httpService: HttpService, 
                private sessionService: SessionService)
    {}

    autenticar(usuario: String, senha: String, success, error){
        this.httpService.autenticar(usuario, senha, (data) => 
        {
            this.sessionService.setUsuario({ usuario: usuario, senha: senha });
            success(data);
        }, error);
    }
}