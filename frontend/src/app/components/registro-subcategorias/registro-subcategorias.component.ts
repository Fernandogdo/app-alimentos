import { SubcategoriaAlimentoService } from './../../services/subcategoria-alimento.service';
import { ModalSubcategoriaComponent } from './../modal-subcategoria/modal-subcategoria.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SubcategoriaAlimento } from '../../models/subcategoria-alimento';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-subcategorias',
  templateUrl: './registro-subcategorias.component.html',
  styleUrls: ['./registro-subcategorias.component.css']
})
export class RegistroSubcategoriasComponent implements OnInit {

  dialogRoom: MatDialogRef<ModalSubcategoriaComponent>;
  // dialogRoom1: MatDialogRef<ModalPinComponent>;
  // subcategorias: Observable<SubcategoriaAlimento[]>;
  idCategoria;
  name: string = "";

  // subcategoria = {} as SubcategoriaAlimento;
  public subcategoria: SubcategoriaAlimento = {};
  constructor(
    private subcategoriaAlimentoService: SubcategoriaAlimentoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dialog2: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params['id'];
    console.log(this.idCategoria)
    this.getSubCategories();
    // this.obtenerIdCategoria();
  }

  ModalSubcategoria() {
    this.dialogRoom = this.dialog.open(ModalSubcategoriaComponent);
  }


  // obtenerIdCategoria(){
  //   this.idCategoria = this.route.snapshot.params['id'];
  //   console.log('IDCATEGROAI:', this.idCategoria)
  // }


  addSubCategory(form:NgForm) {
   console.log(form.value.name)
    this.subcategoriaAlimentoService.postSubCategory(form.value)
      .subscribe((nuevaRetroalimentacion) => {
        console.log(nuevaRetroalimentacion);
        console.log('se guardo')
        
      });
    
    this.getSubCategories();
    // this.resetForm(form.value.name);
  }

  // addSubCategory(form: NgForm, message: string, action: string) {
  //   this.subcategoriaAlimentoService.postSubCategory(form.value) //Toma el valor del empleado 
  //     .subscribe(res => {
  //       console.log(res)
  //       this.resetForm(form);
  //       // this._snackBar.open(message, action, {duration: 2000});
  //     });
  // }

  getSubCategories(){
    this.subcategoriaAlimentoService.getSubCategory(this.idCategoria) //Toma el valor del empleado 
      .subscribe(res => {
        console.log(res)
        this.subcategoriaAlimentoService.subcategories = res as SubcategoriaAlimento[];
      });
      console.log("ID CAT:", this.idCategoria)
  }


  // Reset Form
   resetForm(form? : NgForm) {
    if (form) {
      form.value.name.reset();
      this.subcategoriaAlimentoService.selectedsubCategory = new SubcategoriaAlimento();
    }
  }
s
}
