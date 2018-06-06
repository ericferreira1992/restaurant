import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router/src/config";
import { NgModule } from "@angular/core";
import { PratoComponent } from "./prato.component";
import { PratoListarComponent } from "./listar/prato-listar.component";
import { PratoManutencaoComponent } from "./manutencao/prato-manutencao.component";

const rotasPrato: Routes = [
    {
        path: '',
        component: PratoComponent,
        children:
        [
            { path: 'listar', component: PratoListarComponent },
            { path: '', component: PratoManutencaoComponent },
            { path: ':id', component: PratoManutencaoComponent }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(rotasPrato)
    ],
    exports: [RouterModule]

})
export class PratoRouting{

}
