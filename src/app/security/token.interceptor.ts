import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let userContext = this.authService.getCurrentContext();
        if(userContext && userContext.token){
            req = req.clone({
                setHeaders:{
                    Authorization: 'Bearer '+userContext.token
                }
            });
        }

        return next.handle(req);
    }
}
