import { SubcategoriaAlimento } from './../../models/subcategoria-alimento';
import { SubcategoriaAlimentoService } from './../../services/subcategoria-alimento.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-subcategoria',
  templateUrl: './modal-subcategoria.component.html',
  styleUrls: ['./modal-subcategoria.component.css']
})
export class ModalSubcategoriaComponent implements OnInit {

  constructor(
    private subcategoriaAlimentoService: SubcategoriaAlimentoService,
  ) { }

  ngOnInit() {
    this.getSubCategories();
  }

  addSubCategory(form: NgForm){
    this.subcategoriaAlimentoService.postSubCategory(form.value) //Toma el valor del empleado 
      .subscribe(res => {
        console.log(res)
        this.resetForm(form);
        this.getSubCategories();
      });
  }

  getSubCategories(){
    this.subcategoriaAlimentoService.getSubCategories() //Trae SubCategorias 
      .subscribe(res => {
        this.subcategoriaAlimentoService.subCategories = res as SubcategoriaAlimento[];
        // this.categories
        console.log(res);
      });  
  }


   //Reset Form
   resetForm(form? : NgForm) {
    if (form) {
      form.reset();
      this.subcategoriaAlimentoService.selectedsubCategory = new SubcategoriaAlimento();
    }
  }
}
