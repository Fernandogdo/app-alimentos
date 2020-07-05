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

  postSubCategory(name: string, categoria: string, upload: File){
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('categoria', categoria);
    formData.append('upload', upload);

    return this.http.post(this.URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  //Add subcategoria
  // postSubCategory(name: string, categoria: string, upload: File){
  //   var formData: any = new FormData();
  //   formData.append('name', name);
  //   formData.append('categoria', categoria);
  //   formData.append('upload', upload);

  //   return this.http.post(this.URL, formData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   });
  // }

  //Trae data de SubCategoria por id de Subcategoria
  getOneSubCategoria(id){
    return this.http.get(this.URL + id)
  }

  //Trae SubCategoria por id de categoria, solo las que pertenecen a esa categoria
  getSubCategory(categoria): Observable<any> {
    return this.http.get(this.URL_Buscar + categoria );
  }


  //Edita Sub Categoria
  putSubCategory(idSubcategoria: string, name: string, categoria: string, upload: File) {
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('categoria', categoria);
    formData.append('upload', upload);
    console.log('IDSUBSERVI', idSubcategoria);
    console.log('NAMESERVI', name);
    console.log('IDCATSERVI', categoria);
    return this.http.put(this.URL + idSubcategoria, formData);
    
  }

  // putSubCategory(name: string, categoria: string, upload: File){
  //   return this.http.put(this.URL + `${subcategory._id}`, subcategory)
  // }

  deleteSubCategory(_id: string){
    return this.http.delete(this.URL + _id);
  }
}
