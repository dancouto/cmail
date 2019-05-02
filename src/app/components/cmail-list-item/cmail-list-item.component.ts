import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';



@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: ['./cmail-list-isNgTemplate.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario='';
  @Input() assunto='';
  @Input() introducaoDoConteudo='';
  @Input() dataDeEnvio='';
  @Input() emailId = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeEmail(click: Event){
    console.log('clicou no botao remover');
    if(confirm('Tem Certeza?')){
      this.vaiRemover.emit({ status: 'removing' })
    }
  }
}
