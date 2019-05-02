import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PageDataService{

    //titulo = new EventEmitter<string>();
    titulo = new Subject<string>();

    defineTitulo(novoTitulo: string) {
        document.querySelector('title').textContent = novoTitulo;
        //this.titulo.emit(novoTitulo);
        this.titulo.next(novoTitulo);
    }
}