import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Acercade, PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  mostrarse:boolean=false;
  miPortfolio:any;
  nuevoAcerca : Acercade = { nombres:' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ' };
  editarAcerca : Acercade = { nombres:' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ' };

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
   this.verDatos(); 
  
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
    this.datosPortfolio.agregarDatos(this.nuevoAcerca).subscribe(
    data => {
    console.log(data); } );
  }

 editarDatos(){
    this.datosPortfolio.editarDatos(this.editarAcerca).subscribe(
    data => {
    console.log(data); } );
  }
  
  
  }
  
