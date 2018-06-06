import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Global } from './../../core/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    private serverApi: String = 'http://localhost:53413/' ;

    constructor(private http: HttpClient,
                private sessionService: SessionService,
                private global: Global) { }

    private generateHeaders(){
        var headers = {
            'Content-Type': 'application/json'
        }

        return new HttpHeaders(headers);
    }

    private defaultSubscribe(promise, success?, error?){
        promise.subscribe(
            (data) => { 
                this.global.onRequest = false; 
                if(success) success(data);
            },
            (data) => {
                this.global.onRequest = false; 
                if(error) error(data);
            });
    }

    autenticar(usuario, senha, success?, error?) {
        this.global.onRequest = true;
        
        setTimeout(() => 
        {
            this.global.onRequest = false;
            success({});
        }, 1500);
    }

    get(url: String, success?, error?, opts: Object = null) {
        this.global.onRequest = true;

        let promise = this.http.get(this.serverApi +'api/'+ url, { headers: this.generateHeaders() });
        this.defaultSubscribe(promise, success, error);
    }

    post(url: String, obj: Object, success?, error?, opts: Object = null){
        this.global.onRequest = true;

        let promise = this.http.post(this.serverApi +'api/'+ url, obj, { headers: this.generateHeaders() });
        this.defaultSubscribe(promise, success, error);
    }

    put(url: String, obj: Object, success?, error?, opts: Object = null){
        this.global.onRequest = true;

        let promise = this.http.put(this.serverApi +'api/'+ url, obj, { headers: this.generateHeaders() });
        this.defaultSubscribe(promise, success, error);
    }

    del(url: String, success?, error?, opts: Object = null){
        this.global.onRequest = true;

        let promise = this.http.delete(this.serverApi +'api/'+ url, { headers: this.generateHeaders() });
        this.defaultSubscribe(promise, success, error);
    }
}
