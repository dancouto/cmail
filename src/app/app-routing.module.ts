import { Routes, RouterModule } from "@angular/router";
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { ErrorComponent } from './modules/error/error.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { EmailResolver } from './utils/Email.resolver';


const cadast = 'src/app/modules/cadastro/cadastro.module#CadastroModule';
const login = 'src/app/modules/login/login.modules#LoginModule';
const detalhe = 'src/app/modules/detalhe-email/detalheEmail.module#DetalheEmailModule';
const routes: Routes=[
    {path: '', loadChildren: login},
    {path: 'inbox', component:CaixaDeEntradaComponent, canActivate: [AuthGuard], resolve:{emails:EmailResolver}},
    {path: 'cadastro', loadChildren: cadast},
    {path: 'detalheEmail/:id', loadChildren: detalhe},
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
    ],
    providers: [
        AuthGuard
    ]
})
export class ModuloRoteamento {}