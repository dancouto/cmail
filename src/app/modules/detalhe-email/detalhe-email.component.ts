import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ActivatedRoute } from '@angular/router';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-detalhe-email',
  templateUrl: './detalhe-email.component.html',
  styles: []
})
export class DetalheEmailComponent implements OnInit {
  email: Email;

  constructor(private emailService: EmailService, private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    const id = this.rotaAtiva.snapshot.paramMap.get('id');
    this.email = this.emailService.obtemEmail(id);

    console.log(this.email.assunto)
  }

}
