import { Injectable } from '@angular/core';
import { SubcategoriaAlimento  } from '../models/subcategoria-alimento'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaAlimentoService {

  selectedsubCategory: SubcategoriaAlimento;
  subcategories:SubcategoriaAlimento[];
  URL = 'http://localhost:3000/api/subcategorias/';
  URL_Buscar = 'http://localhost:3000/api/subcategorias/buscar/';

  data;
  constructor(
    private http: HttpClient
  ) { 
    this.selectedsubCategory = new SubcategoriaAlimento();
  }

  // getSubCategories() {
  //   return this.http.get(this.URL);
  // }

  //Add subcategoria
  postSubCategory(subCategory: SubcategoriaAlimento) {
    return this.http.post(this.URL, subCategory );
  }

  //Trae SUbCategoria por id de categoria
  getSubCategory(categoria): Observable<any> {
    return this.http.get(this.URL_Buscar + categoria );
  }

  
}
