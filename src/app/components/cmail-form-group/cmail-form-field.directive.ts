import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[cmailFormField]'
})
export class CmailFormFieldDirective{
    constructor(private campo: ElementRef){ }

    ngOnInit(){
        const campo = this.campo.nativeElement;
        if (campo.name){
            campo.id = campo.name;
            campo.classList.add('mdl-textfield__input');    
            campo.setAttribute('placeholder', ' ');
            //campo.setAttribute('formControlName', campo.name);
        } else {
            throw new Error("Atributo 'name' é obrigatório");
        }
    }
}