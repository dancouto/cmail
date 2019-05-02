import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Email } from '../models/email';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EmailService {
    api = 'http://localhost:3200/emails';
    cabecalho = new HttpHeaders({'Authorization': localStorage.getItem('TOKEN')});
    emails: Email[];

    constructor(private http: HttpClient){}

    enviar({destinatario, assunto, conteudo}){
        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo
        }

        return this.http.post(this.api, emailParaApi, {headers: this.cabecalho}).pipe<Email>(
            map(
              (emailApi:any) => {
                  return new Email({
                      destinatario: emailApi.to,
                      assunto: emailApi.subject,
                      conteudo: emailApi.content,
                      dataDeEnvio: emailApi.created_at,
                      id: emailApi.id
                  })
              }
            )
        )
    }

    listar(){
        return this.http.get(this.api, {headers: this.cabecalho})
            .pipe<Email[]>(
                map(
                (response: any[]) => {
                    return response.map(
                        emailApi => new Email({
                            destinatario: emailApi.to,
                            assunto: emailApi.subject,
                            conteudo: emailApi.content,
                            dataDeEnvio: emailApi.created_at,
                            id: emailApi.id
                        })
                    )
                }
                )
            )
            .pipe<Email[]>( 
                tap( (listaEmail: Email[]) => this.emails = listaEmail)
            )

    }

    obtemEmail(id){
        return this.emails.filter( email => 
            {
                return email.id.includes(id);
            }
        )[0]
    }

    deletar(id){
        return this.http.delete(`${this.api}/${id}`, {headers: this.cabecalho});
    }
}