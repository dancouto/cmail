import { DetalheEmailComponent } from './detalhe-email.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalheEmailRoutingModule } from './detalhe-email-routing.module';
import { FormModule } from 'src/app/components/cmail-form-group/cmail-form.module';

@NgModule({
    declarations: [
        DetalheEmailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedComponentModule,
        FormModule,
        DetalheEmailRoutingModule
        
    ],
    exports: [
        DetalheEmailComponent
    ]
})
export class DetalheEmailModule {}