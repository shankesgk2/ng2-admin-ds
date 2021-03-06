import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
class APIInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Accept: 'application/vnd.ds.v1+json'
      }
    });
    return next.handle(req);
  }
}