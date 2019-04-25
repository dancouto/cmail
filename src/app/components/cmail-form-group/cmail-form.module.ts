import { NgModule } from "@angular/core";

import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CmailFormGroupComponent,
        CmailFormFieldDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CmailFormGroupComponent,
        CmailFormFieldDirective
    ]
})
export class FormModule {}