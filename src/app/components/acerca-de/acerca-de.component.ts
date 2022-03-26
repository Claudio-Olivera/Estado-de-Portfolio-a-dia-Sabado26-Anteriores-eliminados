import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

import { AutenticacionService} from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  mostrarse:boolean=false;
  miPortfolio:any=[];
  nuevoAcerca : Acercade = { nombres:' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ' };
  editarAcerca : Acercade = { nombres:' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ' };

  constructor(private datosPortfolio:AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log("Datos personales"+ JSON.stringify(data));
      this.miPortfolio=data[0];
    })
  }

  verDatos(){
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      
      this.miPortfolio=data [0]})
    }

    mirarDatos(id:string){
      this.datosPortfolio.obtenerDatosID(id).subscribe(data=>{
        console.log(data);
        this.miPortfolio=data [0]})
      }

  
  agregarDatos(){
    this.datosPortfolio.sumarDatos(this.nuevoAcerca).subscribe(
    data => {
    console.log(data); } );
  }

 editarDatos(){
    this.datosPortfolio.editDatos(this.editarAcerca).subscribe(
    data => {
    console.log(data); } );
  }
  
  }
  
  export interface Acercade{
    nombres : string;
    apellidos: string;
    ocupacion:string;
    sobremi:string;
  }