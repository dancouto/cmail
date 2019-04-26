import { NgModule } from "@angular/core";

import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { FormModule } from 'src/app/components/cmail-form-group/cmail-form.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedComponentModule,
        FormModule,
        CadastroRoutingModule
    ],
    exports: [
        CadastroComponent
    ]
})
export class CadastroModule {}