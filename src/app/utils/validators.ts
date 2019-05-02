import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CustonValidators{

    constructor(private httpClient: HttpClient){
    }

    lowerCaseValidator( field: FormControl){
        const value = field.value;

        if(value.trim() && !/^[a-z0-9]+$/.test(value)){
            return {lowerCase: true};
        }
        
        return null;
    }

    
    imageValidator() {
        return (campoDoFormulario: FormControl) => {
            
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
        };
    }
}