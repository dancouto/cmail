import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './components/caixa-de-entrada/caixa-de-entrada.component';
import { ModuloRoteamento } from './app-routing.module';
import { ErrorComponent } from './modules/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from './components/shared-components.module';
import { FormModule } from './components/cmail-form-group/cmail-form.module';
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';




@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    ErrorComponent,
    FiltroPorAssunto
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ModuloRoteamento,
    HttpClientModule,
    SharedComponentModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
