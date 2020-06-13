import { CategoriaAlimento } from './../models/categoria-alimento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriaAlimentoService {

  selectedCategory: CategoriaAlimento;
  categories:CategoriaAlimento[];
  readonly URL = 'http://localhost:3000/api/categorias';

  constructor(
    private http: HttpClient
  ) { 
    this.selectedCategory = new CategoriaAlimento();
  }

  getCategories() {
    return this.http.get(this.URL);
  }
  // getCategories() {
  //   return this.http.get<CategoriaAlimento[]>(this.URL);
  // }


  postCategory(category: CategoriaAlimento) {
    return this.http.post(this.URL, category );
  }

  putCategory(category: CategoriaAlimento) {
    return this.http.put(this.URL + `/${category._id}`, category);
  }

  deleteCategory(_id: string){
    return this.http.delete(this.URL + `/${_id}`);
  }
}
