import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router/src/config";
import { NgModule } from "@angular/core";
import { RestauranteComponent } from "./restaurante.component";
import { RestauranteListarComponent } from "./listar/restaurante-listar.component";
import { RestauranteManutencaoComponent } from "./manutencao/restaurante-manutencao.component";

const rotasRestaurante: Routes = [
    {
        path: '',
        component: RestauranteComponent,
        children:
        [
            { path: 'listar', component: RestauranteListarComponent },
            { path: '', component: RestauranteManutencaoComponent },
            { path: ':id', component: RestauranteManutencaoComponent }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(rotasRestaurante)
    ],
    exports: [RouterModule]

})
export class RestauranteRouting{

}
