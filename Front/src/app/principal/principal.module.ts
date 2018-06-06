import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalRouting } from './principal.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PrincipalRouting,
    ],
    declarations: [
        PrincipalComponent,
        InicioComponent
    ],
    providers:[
        
    ],
    bootstrap: [PrincipalComponent]
})
export class PrincipalModule { }
