import { MatSnackBar } from '@angular/material/snack-bar';
import { Alimento } from './../../models/alimento';
import { Component, OnInit } from '@angular/core';
import { AlimentoService } from 'src/app/services/alimento.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-visualiza-alimento',
  templateUrl: './visualiza-alimento.component.html',
  styleUrls: ['./visualiza-alimento.component.css']
})
export class VisualizaAlimentoComponent implements OnInit {

  idSubCategoria

  constructor(
    private alimentoService: AlimentoService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.idSubCategoria = this.route.snapshot.params['id'];
    this.getAlimentos();
  }

  // getCategories(){
  //   this.categoriaAlimentoService.getCategories() //Trae Categorias 
  //     .subscribe(res => {
  //       this.categoriaAlimentoService.categories = res as CategoriaAlimento[];
  //       // this.categories
  //       console.log(res);
  //     })    
  // }

  getAlimentos() {
    this.alimentoService.getAlimento(this.idSubCategoria) //Toma el valor del empleado 
      .subscribe(res => {
        // console.log(res)
        this.alimentoService.alimentos = res as Alimento[];
      });
    // console.log("ID CAT:", this.idSubCategoria)
  }

  deleteAlimento(_id: string) {
    this.alimentoService.deleteAlimento(_id)
      .subscribe(res => {
        this._snackBar.open("Alimento Eliminado", "Cerrar", {
          duration: 2000,
        });
        this.getAlimentos();
      });
  }
  // getAlimentos(){
  //   this.alimentoService.getAlimentos()
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }

  
}