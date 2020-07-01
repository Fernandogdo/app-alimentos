import { CategoriaAlimento } from './../models/categoria-alimento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaAlimentoService {

  selectedCategory: CategoriaAlimento;
  // categories:CategoriaAlimento[];
  readonly URL = 'http://localhost:3000/api/categorias/';

  constructor(
    private http: HttpClient
  ) { 
    this.selectedCategory = new CategoriaAlimento();
  }

  getCategories() {
    return this.http.get(this.URL);
  }

  postCategory(name: string, description: string, img: File){
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('img', img);

    return this.http.post(this.URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // postCategory(category: CategoriaAlimento):Observable<any> {
  //   return this.http.post<CategoriaAlimento>(this.URL, category );
  // }

  putCategory(id: string, name: string, description: string, img: File) {
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('img', img);
    return this.http.put(this.URL + id, formData);
  }

  // putSubCategory(subcategory: SubcategoriaAlimento){
  //   return this.http.put(this.URL + `${subcategory._id}`, subcategory)
  // }


  deleteCategory(_id: string){
    return this.http.delete(this.URL + `${_id}`);
  }
}
