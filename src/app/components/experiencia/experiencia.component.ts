import { Component, OnInit } from '@angular/core';

import { AutenticacionService} from 'src/app/servicios/autenticacion.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  mostrarse:boolean=false;
  miPortfolio:any=[];
  nuevoExperiencia : experiencia = { empleoUno: ' ', descripcionUno: ' ', empleoDos: ' ',  descripcionDos: ' ' , empleoTres: ' ', descripcionTres: ' ' };
  editarExperiencia : experiencia = { empleoUno: ' ', descripcionUno: ' ', empleoDos: ' ',  descripcionDos: ' ' , empleoTres: ' ', descripcionTres: ' ' };

  constructor(private datosPortfolio:AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerExp().subscribe(data=>{
      console.log("Datos de experiencia :"+ JSON.stringify(data));
      this.miPortfolio=data[0];
    })
  }
  verExp(){
    this.datosPortfolio.obtenerExp().subscribe(data=>{
      console.log(data);
      
      this.miPortfolio=data [0]})
    }

  agregarExp(){
    this.datosPortfolio.sumarExp(this.nuevoExperiencia).subscribe(
    data => {
    console.log(data); } );
  }

  editarExp(){
    this.datosPortfolio.editExp(this.editarExperiencia).subscribe(
    data => {
    console.log(data); } );
  }

}
export interface experiencia{
  empleoUno: String;
  descripcionUno:String;
  empleoDos: String;
  descripcionDos:String;
  empleoTres:String;
  descripcionTres: String;
}