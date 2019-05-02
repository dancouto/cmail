import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HeaderDataService {

    valorDoFiltro = new Subject<string>();
    private user$ = new BehaviorSubject<string>(null);

    constructor(){
        this.atualizarTermoDeFiltro('');
        this.user$.next('Daniel Couto');
    }

    atualizarTermoDeFiltro(novoValor: string){
        this.valorDoFiltro.next(novoValor);
    }

    getUser(){
        return this.user$;
    }
}