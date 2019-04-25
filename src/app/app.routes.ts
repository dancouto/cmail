import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ErrorComponent } from './modules/error/error.component';

const routes: Routes=[
    {path: '', component: LoginComponent},
    {path: 'inbox', component:CaixaDeEntradaComponent},
    {path: 'cadastro', component:CadastroComponent},
    {path: '404', component:ErrorComponent},
    {path: '**', redirectTo: '404'}
];

export const ModuloRoteamento = RouterModule.forRoot(routes);