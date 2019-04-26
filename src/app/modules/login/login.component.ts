import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }
  mensagemErro: any;

  constructor(private loginService: LoginService, private roteador: Router) { }

  ngOnInit() { }

  handleLogin(formLogin: NgForm){
    if(formLogin.valid){
      this.loginService.logar(this.login).subscribe(
        (response: any)=>{
          console.log(response);
          console.log('deu Certo');
          //localStorage.setItem('TOKEN', response.token);
          this.roteador.navigate(['/inbox']);
        },
        (responseError: HttpErrorResponse) =>{
          console.error(responseError );
          console.log('deu ruim');
          this.mensagemErro = responseError.error.body;
        }
      )
    }
  }

  

}
