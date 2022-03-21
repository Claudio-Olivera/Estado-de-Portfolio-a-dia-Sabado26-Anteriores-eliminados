
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private API_servicio = "https://claudioolivera.herokuapp.com/persona/alldata" 
  private API_servicioID="https://claudioolivera.herokuapp.com/persona/detail/"
  private API_agregar = "https://claudioolivera.herokuapp.com/persona/new/data"
  private API_editar = "https://claudioolivera.herokuapp.com/persona/actualizar/"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.API_servicio); //aca va la url request de datos
  }
  obtenerDatosID(id:string):Observable<any>{
    return this.http.get(this.API_servicioID+id); 
  }

  agregarDatos(arr : Acercade):Observable<any>{
  return this.http.post(this.API_agregar, arr );
  }

  editarDatos( arr :  Acercade):Observable<any>{
  return this.http.put(this.API_editar+1, arr);
}

}

export interface Acercade{

  nombres : string;
  apellidos: string;
  ocupacion:string;
  sobremi:string;
}

