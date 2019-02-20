import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationInterceptor implements HttpInterceptor {

    constructor(private configService: ConfigService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let settings = this.configService.getConfigSettings();
        if(settings){
            req = req.clone({
                url:settings.apiUrl+req.url
            });
        }

        return next.handle(req);
    }
}
