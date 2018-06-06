import { Injectable } from "@angular/core";
import { SessionService } from "../session.service";
import { HttpService } from '../http.service';
import { BaseWebApi } from "./base-webapi.service";

@Injectable()
export class PratoWebApi extends BaseWebApi{
    constructor(httpService: HttpService, 
                sessionService: SessionService)
    {
        super(httpService, sessionService);
        this.prefixo = 'prato';
    }
}