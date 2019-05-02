import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';
import { Observable } from 'rxjs';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [` 
          ul, li {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
          `]
})

export class CaixaDeEntradaComponent{
    private _isNewEmailFormOpen:boolean = false;
    emailList = [];
    emails$:Observable<Email[]>;
    email = {
        destinatario:'',
        assunto:'',
        conteudo:''
    }
  termoParaFiltro: any = '';

  constructor(private emailService: EmailService, 
    private pageDataService: PageDataService, 
    private headerService: HeaderDataService){}

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

  ngOnInit(){
    //this.emailService.listar().subscribe(lista => {this.emailList = lista;});
    this.emails$ = this.emailService.listar();
    this.pageDataService.defineTitulo('Caixa de Entrada - CMail');
    this.headerService.valorDoFiltro.subscribe(novoValor => this.termoParaFiltro = novoValor)
  }

  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log('Clicou no Item');
    if (eventoVaiRemover.status === 'removing'){
      this.emailService.deletar(emailId).subscribe(
        res => {
          console.log(res);
          this.emailList = this.emailList.filter(email => email.id != emailId);
        },
        err => console.log(err)
      );
    }
  }

  filtrarEmailsPorAssunto(){
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();

    return this.emailList.filter( email => {
      const assunto = email.assunto.toLowerCase();
      return assunto.includes(termoParaFiltroEmMinusculo);
    })
  }
}