import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  urls:string = "https://claudioolivera.herokuapp.com" ;
  url="https://claudioolivera.herokuapp.com/auth/login";

  currentUserSubject:BehaviorSubject<any>;
  constructor(private http:HttpClient) { 

    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('current user') || '{}'))
    
  }
  //acerca de
  obtenerDatos():Observable<any>{
    return this.http.get(this.urls+"/persona/alldata"); //aca va la url request de datos
    
  }
  obtenerDatosID(id:string):Observable<any>{
    return this.http.get(this.urls+"/persona/detail/"+id); 
  }

  sumarDatos(arr : Acercade):Observable<any>{
  return this.http.post(this.urls+"/persona/new/data", arr );
  }

  editDatos( arr :  Acercade):Observable<any>{
  return this.http.put(this.urls+"/persona/actualizar/"+1, arr);
}

//experiencia
obtenerExp():Observable<any>{
  return this.http.get(this.urls+"/ver/experiencia"); //aca va la url request de datos
  
}

sumarExp(arr : experiencia):Observable<any>{
return this.http.post(this.urls+"/new/experiencia", arr );
}

editExp( arr :  experiencia):Observable<any>{
  return this.http.put(this.urls+"/modExp/"+11, arr);
}


  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data); //linea faltante que no dejaba funcionar bien el interceptor
      console.log( data)
      return data;
      
    }))
  }
  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }

}
export interface Acercade{

  nombres : string;
  apellidos: string;
  ocupacion:string;
  sobremi:string;
  
}
export interface experiencia{

  empleoUno: String;
  descripcionUno:String;
  empleoDos: String;
  descripcionDos:String;
  empleoTres:String;
  descripcionTres: String;
  
}