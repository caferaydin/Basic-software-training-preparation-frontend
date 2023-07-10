import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  // request yapılan her route da "next" in içerisine koyduğumuz token ile gider. 
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>; 

    newRequest = request.clone({ 
      // request.clone => mevcut yapılan isteği clonla ve aşşağıdaki gibi Authorization a tokeni ekle return next handle de yeni requesti gönder.
      headers: request.headers.set("Authorization", "Bearer " + token)
    });
    return next.handle(newRequest);
  }
}
