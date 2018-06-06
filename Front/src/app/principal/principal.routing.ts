import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router/src/config";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../shared/guards/auth.guard";
import { PrincipalComponent } from "./principal.component";
import { InicioComponent } from "./inicio/inicio.component";

const rotasPrincipal: Routes = [
    {
        path: '',
        component: PrincipalComponent,
        children:
        [
            { path: 'inicio', component: InicioComponent },
            { path: 'restaurante', loadChildren: './restaurante/restaurante.module#RestauranteModule' },
            { path: 'prato', loadChildren: './prato/prato.module#PratoModule' }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(rotasPrincipal)],
    exports: [RouterModule]

})
export class PrincipalRouting{

}
