import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private _http: HttpClient ) {
   }

  //  getCategorias(): Observable<Categoria[]>{
  //    return this._http.get('http://localhost:8000/api/v1/categorias').pipe(map((response: Response) => response.json()));     
  //  }

   getCategorias(){
     return this._http.get('http://localhost:8000/api/v1/categorias');     
   }
}
