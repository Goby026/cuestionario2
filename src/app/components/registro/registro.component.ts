import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from  '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';
import { Router } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{

  mensaje:string = "";
  fbObject:any = {};

  cliente:Object = {
    nombre: "Grover",
    apellido:"Rendich",
    dni:"45068903",
    correo:"grendich@gmail.com",
    id$:""
  }

  forma:FormGroup;

  constructor( private registroService: RegistroService, private _router: Router, private fb: FacebookService) {
    //si creamos un modelo con la misma estructura de la FORMA entonces se puede setear de la sgte manera: this.forma.setValue( this.object_name )

    let initParams: InitParams = {
      appId: '295309317772902',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);

    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', Validators.required),
      'dni': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });

    // this.forma.setValue(this.cliente);

   }

   mostrar(){
     console.log("yeahhhh!!!!!!");
   }

   guardarCambios(){

     if( this.forma.status !== "INVALID" ){
      this.registroService.saveCustomer(this.forma.value).subscribe((response: any) => {
        // console.log(response);
        this._router.navigate(['/encuesta', this.forma.value.nombre, response.name]);
      }, error => console.log(error));
     }else{
       this.mensaje = "Debe indicar correctamente los datos.";
     }
     
    //  this.forma.reset({
    //   nombre: "",
    //   apellido:"",
    //   dni:"",
    //   correo:""
    //  });
    
   }
   
  }
