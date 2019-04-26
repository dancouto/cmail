import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { FormModule } from 'src/app/components/cmail-form-group/cmail-form.module';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from 'src/app/services/login.service';

@NgModule ({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,        
        SharedComponentModule,
        FormModule,
        LoginRoutingModule
    ],
    providers: [
        LoginService
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {}