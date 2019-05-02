import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Email } from '../models/email';
import { EmailService } from '../services/email.service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EmailResolver implements Resolve<Observable<Email[]>>{

    constructor(private emailService: EmailService){}

    resolve(rota: ActivatedRouteSnapshot, estado: RouterStateSnapshot){
        return this.emailService.listar();
    }
}