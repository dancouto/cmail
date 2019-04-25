import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { ErrorComponent } from './modules/error/error.component';
import { NgModule } from '@angular/core';


const cadast = 'src/app/modules/cadastro/cadastro.module#CadastroModule';
const routes: Routes=[
    {path: '', component: LoginComponent},
    {path: 'inbox', component:CaixaDeEntradaComponent},
    {path: 'cadastro', loadChildren: cadast},
    {path: '404', component:ErrorComponent},
    {path: '**', redirectTo: '404'}
];

//export const ModuloRoteamento = RouterModule.forRoot(routes);

@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ModuloRoteamento {}