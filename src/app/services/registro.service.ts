import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = "https://perudata-quest.firebaseio.com/clientes.json";

  constructor(private _http: HttpClient) { 

  }

  saveCustomer(cli:any){

    let cliente = JSON.stringify(cli);
    let headers = new HttpHeaders({
      'Content-Type': 'aplication/json'
    });

    return this._http.post(this.url,cliente);
  }
}
