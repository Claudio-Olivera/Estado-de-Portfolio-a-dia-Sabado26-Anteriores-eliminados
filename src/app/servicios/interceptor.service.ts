import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { AutenticacionService } from './autenticacion.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionService:AutenticacionService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser= this.autenticacionService.UsuarioAutenticado;
    if(currentUser && currentUser.token){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      console.log("El VALOR EXISTE :")
    }
    
    console.log("Interceptor esta corriendo" + JSON.stringify(currentUser));
    
    return next.handle(req);

  }

}
