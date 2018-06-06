import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestauranteRouting } from './restaurante.routing';
import { SharedModule } from '../../shared/shared.module';

//Components
import { RestauranteComponent } from './restaurante.component';
import { RestauranteListarComponent } from './listar/restaurante-listar.component';
import { RestauranteManutencaoComponent } from './manutencao/restaurante-manutencao.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RestauranteRouting,
    ],
    declarations: [
        RestauranteComponent,
        RestauranteListarComponent,
        RestauranteManutencaoComponent
    ],
    providers:[
    ],
    bootstrap: [RestauranteComponent]
})
export class RestauranteModule { }
