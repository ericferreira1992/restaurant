import { Injectable } from '@angular/core';
import { HttpService } from './../http.service';
import { SessionService } from './../session.service';
import { BaseWebApi } from './base-webapi.service';

@Injectable()
export class RestauranteWebApi extends BaseWebApi {
    constructor(httpService: HttpService, 
                sessionService: SessionService)
    {
        super(httpService, sessionService);
        this.prefixo = 'restaurante';
    }
}
