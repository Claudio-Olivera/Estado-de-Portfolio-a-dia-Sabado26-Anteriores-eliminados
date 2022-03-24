import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { InterceptorService } from 'src/app/servicios/interceptor.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form:FormGroup;
 oculto : boolean= false;
  router: any;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService ,private ruta:Router) { 
    this.form=this.formBuilder.group({
      nombreUsuario:[,[Validators.required, Validators.minLength(9)]],
      password:[,[Validators.required,Validators.minLength(8)]]
      });
  
  }

  ngOnInit(): void {
 
    
  }
  
    mostrar(){
      this.oculto = !this.oculto;
    }
    
    

    get User()
    {
      return this.form.get('nombreUsuario');

    }

    get Password()
    {
      return this.form.get('password');
      
    }

    onEnviar(event:Event){
      event.preventDefault;
      this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
        console.log("DATA:" + JSON.stringify(data));
        this.ruta.navigate(['/']);

      })
    }

  }




