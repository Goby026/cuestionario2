import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-encuesta',
    templateUrl: './encuesta.component.html',
    styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {

    cliente: string = '';
    id: string = '';

    forma: FormGroup;

    uno: any = 1;

    encuesta: Object = {
        pregunta1: {
            id: '',
            opcion: ''
        },
        pregunta2: {
            id: '',
            opcion: ''
        },
        pregunta3: {
            opcion1: '',
            opcion2: '',
            opcion3: '',
            opcion4: ''
        },
        pregunta4: {
            opcion1: '',
            opcion2: '',
            opcion3: '',
            opcion4: ''
        },
        pregunta5: {
            opcion1: '',
            opcion2: '',
            opcion3: '',
            opcion4: ''
        },
        id: ''
    }

    marcas: any[] = [
        {id: 'lenovo', nombre: 'Lenovo'},
        {id: 'huawei', nombre: 'Huawei'},
        {id: 'asus', nombre: 'ASUS'},
        {id: 'msi', nombre: 'MSI'},
        {id: 'hp', nombre: 'HP'},
        {id: 'dell', nombre: 'DELL'},
        {id: 'apple', nombre: 'Apple'},
        {id: 'acer', nombre: 'Acer'}
    ];

    dispositivos: any[] = [
        {codi: '1', nombre: 'Tablet'},
        {codi: '2', nombre: 'Laptop'},
        {codi: '3', nombre: 'PC de escritorio'},
        {codi: '4', nombre: 'Smartphone'}
    ];

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(data => {
            this.cliente = data.nombre;
            this.id = data.id;

            console.log('clienteID: ' + this.id);
        });


        this.forma = new FormGroup({
            'pregunta1': new FormGroup({
                'id': new FormControl('', Validators.required),
                'opcion': new FormControl('', Validators.required)
            }),
            'pregunta2': new FormGroup({
                'id': new FormControl('', Validators.required),
                'opcion': new FormControl('', Validators.required)
            })
        });
    }

    guardarEncuesta() {
        console.log(this.encuesta);
        console.log(this.forma.value);
    }

}
