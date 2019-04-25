import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  });
  mensagensErro: any;

  handleCadastrarUsuario(){
    if(this.formCadastro.valid){
      //console.log(this.formCadastro.value);
      //this.formCadastro.reset();
      const userData = new User(this.formCadastro.value);

      this.httpClient.post('http://localhost:3200/users', userData).subscribe(
        ()=>{
          console.log('cadastro com sucesso');
          this.formCadastro.reset();
          setTimeout(()=> {this.roteador.navigate(['']);}, 1000);

        }, //erro => console.log(erro)
        (responseError: HttpErrorResponse) => {
          this.mensagensErro= responseError.error.body;
        }
      );
    }
    else {
      //console.log('campos precisam ser preenchidos');
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  validarTodosOsCamposDoFormulario(form: FormGroup){
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true});
    });

  }

  validaImagem(campoDoFormulario: FormControl){
    /*
      Uma possibilidade
      fetch(campo.value).then(resp => console.log(resp)).catch(erro=>console.log(erro));
    */
    //return new Promise(resolve => resolve());

    return this.httpClient.head(campoDoFormulario.value, {
      observe: 'response'
    }).pipe(
      map((response: HttpResponseBase) => {
        return response.ok ? null : {urlInvalida: true}
      }), 
      catchError((error) => {
        return [{urlInvalida: true}]
      })
    )
  }

  constructor( private httpClient: HttpClient, private roteador: Router) { }

  ngOnInit() {
  }

}
