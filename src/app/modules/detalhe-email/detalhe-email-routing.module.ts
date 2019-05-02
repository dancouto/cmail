import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DetalheEmailComponent } from './detalhe-email.component';


const rotasDetalheEmail: Routes = [
    {path: '', component: DetalheEmailComponent}
]

@NgModule({
    imports: [ 
        RouterModule.forChild(rotasDetalheEmail)
    ],
    exports: [ 
        RouterModule
    ]
})

export class DetalheEmailRoutingModule {}