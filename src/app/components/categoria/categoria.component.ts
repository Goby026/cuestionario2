import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria-service.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  categorias:Categoria[];

  constructor( private _categoriaService: CategoriaService ) {
    // this.categorias = this._categoriaService.getCategorias();
    // console.log(this._categoriaService.getCategorias());
  }

  ngOnInit() {
    this._categoriaService.getCategorias()
    .subscribe((categorias:Categoria[]) => {
      this.categorias = categorias;
    }, error => console.log(error));
  }

}
