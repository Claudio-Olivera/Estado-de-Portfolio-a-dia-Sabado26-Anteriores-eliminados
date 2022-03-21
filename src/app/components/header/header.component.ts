import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form:FormGroup;
 oculto : boolean= false;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService ) { 
    this.form=this.formBuilder.group({
      nombreUsuario:[' ',[Validators.required]],
      password:[' ',[Validators.required, Validators.minLength(8)]]
      });
  
  }

  ngOnInit(): void {
    
  }
  
    mostrar(){
      this.oculto = !this.oculto;
    }
    onenviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));

    })
    }

  }




