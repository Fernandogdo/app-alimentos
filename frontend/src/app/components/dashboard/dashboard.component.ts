
import { Component, OnInit } from '@angular/core';
import { CategoriaAlimentoService} from '../../services/categoria-alimento.service'
import { NgForm } from '@angular/forms';
import { CategoriaAlimento } from 'src/app/models/categoria-alimento';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  // categories: CategoriaAlimento[];

  constructor(
    private categoriaAlimentoService: CategoriaAlimentoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  //Add Category
  addCategory(form: NgForm){
    this.categoriaAlimentoService.postCategory(form.value) //Toma el valor del empleado 
      .subscribe(res => {
        console.log(res)
        this._snackBar.open("Categoria Agregada", "Cerrar", {
          duration: 2000,
        });
        this.resetForm(form);
        this.getCategories();
      });
  }

  //Get Categories
  getCategories(){
    this.categoriaAlimentoService.getCategories() //Trae Categorias 
      .subscribe(res => {
        this.categoriaAlimentoService.categories = res as CategoriaAlimento[];
        // this.categories
        console.log(res);
      })    
  }


  //Reset Form
  resetForm(form? : NgForm) {
    if (form) {
      form.reset();
      this.categoriaAlimentoService.selectedCategory = new CategoriaAlimento();
    }
  }
  
  //SnackBar
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open("Categoria Agregada", "Cerrar", {
  //     duration: 2000,
  //   });
  // }

}
