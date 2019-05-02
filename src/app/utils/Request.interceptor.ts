import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if(localStorage.getItem('TOKEN')){
            req = req.clone({
                setHeaders:{
                    'Authorization': localStorage.getItem('TOKEN')
                }
            })
        }

        return next.handle(req);
    }

}