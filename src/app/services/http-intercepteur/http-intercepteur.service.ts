
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepteurService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZXNzaWlAZ21haWwuY29tIiwiZXhwIjoxNjk3NDk1ODY2LCJpYXQiOjE2OTc0NTk4NjZ9.koHWj5Zk8COmF4RX2eG-D8L2GM--i13a8J6gPy69V24'

    if(token !== undefined && token !==null){
      //assigner le token
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization:'Bearer' + token
        })
      });
      return next.handle(authReq)
    }

   return next.handle(req)
  }
}
