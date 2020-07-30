import { HttpClient } from '@angular/common/http';
import { Alimento } from './../models/alimento';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  selectedAlimento: Alimento;
  alimentos: Alimento[];
  URL = 'http://localhost:3000/api/alimentos/';
  URL_Buscar = 'http://localhost:3000/api/alimentos/buscar/'

  constructor(
    private http: HttpClient
  ) {
    this.selectedAlimento = new Alimento();
  }


  postAlimento(subcategoria: string, autor: string, fecha: string, categoria: string, nombre_comun: string, nombre_cientifico: string,
    otro_nombre: string, origen: string, conservacion_alimento: string, description: string, temporada: string,
    presentacion: string, unidades: string, mercado: string, supermercado: string, kilocalorias: string, glucidos: string,
    proteinas: string, lipidos: string, modelo3d: string, upload: File) {
    var formData: any = new FormData();
    formData.append('subcategoria', subcategoria);
    formData.append('autor', autor);
    formData.append('fecha', fecha);
    formData.append('categoria', categoria);
    formData.append('nombre_comun', nombre_comun);
    formData.append('nombre_cientifico', nombre_cientifico);
    formData.append('otro_nombre', otro_nombre);
    formData.append('origen', origen);
    formData.append('conservacion_alimento', conservacion_alimento);
    formData.append('description', description);
    formData.append('temporada', temporada);
    formData.append('presentacion', presentacion);
    formData.append('unidades', unidades);
    formData.append('mercado', mercado);
    formData.append('supermercado', supermercado);
    formData.append('kilocalorias', kilocalorias);
    formData.append('glucidos', glucidos);
    formData.append('proteinas', proteinas);
    formData.append('lipidos', lipidos);
    formData.append('modelo3d', modelo3d);
    formData.append('upload', upload);
    

    return this.http.post(this.URL, formData)
  }


  getOneAlimento(idAlimento) {
    return this.http.get(this.URL + idAlimento)
  }


  putAlimento(idAlimento: string, subcategoria: string, autor: string, fecha: string, categoria: string, nombre_comun: string,
    nombre_cientifico: string, otro_nombre: string, origen: string, conservacion_alimento: string,
    description: string, temporada: string, presentacion: string, unidades: string, mercado: string,
    supermercado: string, kilocalorias: string, glucidos: string, proteinas: string, lipidos: string, modelo3d: string,
    upload: File) {
    var formData: any = new FormData();
    formData.append('subcategoria', subcategoria);
    formData.append('autor', autor);
    formData.append('fecha', fecha);
    formData.append('categoria', categoria);
    formData.append('nombre_comun', nombre_comun);
    formData.append('nombre_cientifico', nombre_cientifico);
    formData.append('otro_nombre', otro_nombre);
    formData.append('origen', origen);
    formData.append('conservacion_alimento', conservacion_alimento);
    formData.append('description', description);
    formData.append('temporada', temporada);
    formData.append('presentacion', presentacion);
    formData.append('unidades', unidades);
    formData.append('mercado', mercado);
    formData.append('supermercado', supermercado);
    formData.append('kilocalorias', kilocalorias);
    formData.append('glucidos', glucidos);
    formData.append('proteinas', proteinas);
    formData.append('lipidos', lipidos);
    formData.append('modelo3d', modelo3d);
    formData.append('upload', upload);
    console.log('IDSALIMENSERVI', idAlimento);
    console.log('IDSUBSERVI', subcategoria);
    return this.http.put(this.URL + idAlimento, formData);
  }



  getAlimento(alimento): Observable<any> {
    return this.http.get(this.URL_Buscar + alimento);
  }

  getAlimentos(){
    return this.http.get(this.URL);
  }

  deleteAlimento(_id: string) {
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