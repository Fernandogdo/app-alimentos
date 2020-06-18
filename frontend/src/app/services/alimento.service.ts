import { HttpClient } from '@angular/common/http';
import { Alimento } from './../models/alimento';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  selectedAlimento: Alimento;
  alimentos:Alimento[];
  URL = 'http://localhost:3000/api/alimentos/';
  URL_Buscar = 'http://localhost:3000/api/alimentos/buscar/'

  constructor(
    private http: HttpClient
  ) { 
    this.selectedAlimento = new Alimento();
  }


  postAlimento(alimento: Alimento){
    return this.http.post(this.URL, alimento )
  }

  getAlimento(alimento): Observable<any> {
    return this.http.get(this.URL_Buscar + alimento );
  }

  deleteAlimento(_id: string){
    return this.http.delete(this.URL + _id);
  }

  // deleteSubCategory(_id: string){
  //   return this.http.delete(this.URL + _id);
  // }
  // getAlimentos(){
  //   return this.http.get(this.URL);
  // }

  // postCategory(category: CategoriaAlimento) {
  //   return this.http.post(this.URL, category );
  // }

}
