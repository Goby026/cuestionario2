import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  
  urlEncuesta ="https://perudata-quest.firebaseio.com/clientes";

  constructor(private _http: HttpClient) { }

  saveQuest(encuesta:any){

    let url = `${this.urlEncuesta}/${encuesta.id}/encuesta";`;

    let cliente = JSON.stringify(encuesta);
    let headers = new HttpHeaders({
      'Content-Type': 'aplication/json'
    });

    return this._http.post(url,cliente);
  }
}
