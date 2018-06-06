import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PratoRouting } from './prato.routing';
import { SharedModule } from '../../shared/shared.module';

//Components
import { PratoComponent } from './prato.component';
import { PratoListarComponent } from './listar/prato-listar.component';
import { PratoManutencaoComponent } from './manutencao/prato-manutencao.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PratoRouting,
    ],
    declarations: [
        PratoComponent,
        PratoListarComponent,
        PratoManutencaoComponent
    ],
    providers:[
        CurrencyPipe
    ],
    bootstrap: [PratoComponent]
})
export class PratoModule { }
