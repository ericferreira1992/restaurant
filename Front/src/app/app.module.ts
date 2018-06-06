import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { Global } from './core/global';
import { Utils } from './shared/classes/utils';
import { AuthGuard } from './shared/guards/auth.guard';
import { SessionService } from './shared/services/session.service';
import { HttpService } from './shared/services/http.service';
import { NgToastConfig } from './config/ngtoast.config';
import { UsuarioWebApi } from './shared/services/webapi/usuario-webapi.service';
import { PratoWebApi } from './shared/services/webapi/prato-webapi.service';
import { RestauranteWebApi } from './shared/services/webapi/restaurante-webapi.service';
import { BaseWebApi } from './shared/services/webapi/base-webapi.service';
import { Confirm } from './shared/services/confirm/confirm.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        ToastModule.forRoot(),
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRouting,
        SharedModule
    ],
    providers: [
        HttpService,
        SessionService,
        AuthGuard,
        Global,
        Utils,
        Confirm,

        //Config
        { provide: ToastOptions, useClass: NgToastConfig },

        //WebApi
        UsuarioWebApi,
        RestauranteWebApi,
        PratoWebApi
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
