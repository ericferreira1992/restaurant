import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const rotas: Routes = [
    { path: 'login', component: LoginComponent,  canActivate: [AuthGuard] },
    { path: 'principal', loadChildren: './principal/principal.module#PrincipalModule',  canActivate: [AuthGuard] },

    //Another pages
    { path : '**', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [RouterModule]

})
export class AppRouting{

}
