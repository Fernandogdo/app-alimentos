import { HttpClient } from '@angular/common/http';
import { Alimento } from './../models/alimento';
import { Injectable } from '@angular/core';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  selectedAlimento: Alimento;
  alimentos:Alimento[];
  readonly URL = 'http://localhost:3000/api/alimentos/';

  constructor(
    private http: HttpClient
  ) { }


  postAlimento(alimento: Alimento){
    this.http.post(this.URL, alimento )
  }

  // postCategory(category: CategoriaAlimento) {
  //   return this.http.post(this.URL, category );
  // }

}
