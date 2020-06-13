import { Injectable } from '@angular/core';
import { SubcategoriaAlimento  } from '../models/subcategoria-alimento'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaAlimentoService {

  selectedsubCategory: SubcategoriaAlimento;
  subCategories:SubcategoriaAlimento[];
  readonly URL = 'http://localhost:3000/api/subcategorias';

  constructor(
    private http: HttpClient
  ) { 
    this.selectedsubCategory = new SubcategoriaAlimento();
  }

  getSubCategories() {
    return this.http.get(this.URL);
  }

  postSubCategory(subcategory: SubcategoriaAlimento) {
    return this.http.post(this.URL, subcategory );
  }

}
