import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class Global {
    public rootView: ViewContainerRef;
    public routeLoading: boolean;
    public onRequest: boolean;

    constructor(){
        this.setDefaults();
    }

    setDefaults(){
        this.routeLoading = false;
    }
}
