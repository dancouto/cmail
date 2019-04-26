import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

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
  
    constructor(private emailService: EmailService){}

  get isNewEmailFormOpen():boolean{
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm){
    if(formEmail.invalid) return;
    //this.emailList.push(this.email)

    /*this.email = {
      destinatario:'',
      assunto:'',
      conteudo:''
    }*/

    //formEmail.reset();
    this.emailService.enviar(this.email).subscribe(
      emailApi => {
        this.emailList.push(emailApi)
        this.email = {destinatario: '', assunto: '', conteudo: ''}
        formEmail.reset();
      },
      erro => console.error(erro)
    )
  }
}