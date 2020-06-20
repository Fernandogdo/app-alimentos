import { SubcategoriaAlimento } from './../../models/subcategoria-alimento';
import { SubcategoriaAlimentoService } from './../../services/subcategoria-alimento.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-modal-subcategoria',
  templateUrl: './modal-subcategoria.component.html',
  styleUrls: ['./modal-subcategoria.component.css']
})
export class ModalSubcategoriaComponent implements OnInit {

  subcategoria = {} as SubcategoriaAlimento;

  idCategoria;

  constructor(
    private subcategoriaAlimentoService: SubcategoriaAlimentoService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params['id'];
  }

  
  addSubCategory(form:NgForm) {
   
    this.subcategoriaAlimentoService.postSubCategory(form.value)
      .subscribe((nuevaRetroalimentacion) => {
        console.log(nuevaRetroalimentacion);
        console.log('se guardo')
        
      });
    // this.getSubCategories();
  }

  // addSubCategory(form: NgForm, message: string, action: string) {
  //   this.subcategoriaAlimentoService.postSubCategory(form.value) //Toma el valor del empleado 
  //     .subscribe(res => {
  //       console.log(res)
  //       this.resetForm(form);
  //       this._snackBar.open(message, action, {duration: 2000});
  //     });
  // }


  //Reset Form
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.subcategoriaAlimentoService.selectedsubCategory = new SubcategoriaAlimento();
    }
  }

   //SnackBar
//    openSnackBar(message: string, action: string) {
//     this._snackBar.open("Categoria Agregada", "Cerrar", {
//       duration: 2000,
//     });
//   }
}
