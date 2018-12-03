import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent{

  cliente:string = "";
  id:string = "";

  forma:FormGroup;

  uno:any = 1;

  encuesta:Object={
    pregunta1:{
      opcion1:0,
      opcion2:0,
      opcion3:0,
      opcion4:0
    },
    pregunta2:{
      opcion1:"",
      opcion2:"",
      opcion3:"",
      opcion4:""
    },
    pregunta3:{
      opcion1:"",
      opcion2:"",
      opcion3:"",
      opcion4:""
    },
    pregunta4:{
      opcion1:"",
      opcion2:"",
      opcion3:"",
      opcion4:""
    },
    pregunta5:{
      opcion1:"",
      opcion2:"",
      opcion3:"",
      opcion4:""
    },
    id:""
  }

  marcas:any[] = [
    {id:"lenovo", nombre: "Lenovo"},
    {id:"huawei", nombre: "Huawei"},
    {id:"asus", nombre: "ASUS"},
    {id:"msi", nombre: "MSI"},
    {id:"hp", nombre: "HP"},
    {id:"dell", nombre: "DELL"},
    {id:"apple", nombre: "Apple"},
    {id:"acer", nombre: "Acer"}
  ];

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe( data => {
      this.cliente = data.nombre;
      this.id = data.id;

      console.log("clienteID: "+this.id)
    });


    this.forma = new FormGroup({
      'pregunta1' : new FormGroup({
        'opcion1': new FormControl('', Validators.required),
        'opcion2': new FormControl('', Validators.required),
        'opcion3': new FormControl('', Validators.required),
        'opcion4': new FormControl('', Validators.required)
      })
    });
  }

  guardarEncuesta(){
     console.log(this.encuesta);
    console.log(this.forma.get('pregunta1').value);
  }

}
