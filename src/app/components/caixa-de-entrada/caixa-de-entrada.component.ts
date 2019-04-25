import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: []
})

export class CaixaDeEntradaComponent{
    private _isNewEmailFormOpen:boolean = false;
    emailList = [];
    email = {
        destinatario:'',
        assunto:'',
        conteudo:''
    }

  get isNewEmailFormOpen():boolean{
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm){
    if(formEmail.invalid) return;
    this.emailList.push(this.email)

    this.email = {
      destinatario:'',
      assunto:'',
      conteudo:''
    }

    formEmail.reset();
  }
}