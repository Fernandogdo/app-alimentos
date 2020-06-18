import { SubcategoriaAlimentoService } from './../../services/subcategoria-alimento.service';
import { ModalSubcategoriaComponent } from './../modal-subcategoria/modal-subcategoria.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SubcategoriaAlimento } from '../../models/subcategoria-alimento';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThrowStmt } from '@angular/compiler';

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
  _id:string;
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


  addSubCategory(form: NgForm) {
    if (form.value._id) {
      this.subcategoriaAlimentoService.putSubCategory(form.value)
        .subscribe(res => {
          console.log(res);
          this.subcategoriaAlimentoService.selectedsubCategory._id='';
          this.subcategoriaAlimentoService.selectedsubCategory.name='';
          this.getSubCategories();
         
        })
        
    } else {
      // const name = form.value.name;

      // console.log(name);
      this.subcategoriaAlimentoService.postSubCategory(form.value)
        .subscribe((nuevaRetroalimentacion) => {
          console.log(nuevaRetroalimentacion);
          console.log('se guardo');
          this.subcategoriaAlimentoService.selectedsubCategory.name='';
          this.getSubCategories();
          // this.subcategoriaAlimentoService.selectedsubCategory.name='';
        });
        this.getSubCategories(); 
    }

    // this.subcategoriaAlimentoService.selectedsubCategory.name='';
    // this.subcategoriaAlimentoService.selectedsubCategory._id='';


    // this.resetForm(form.value.name);
  }

  getSubCategories() {
    this.subcategoriaAlimentoService.getSubCategory(this.idCategoria) //Toma el valor del empleado 
      .subscribe(res => {
        console.log(res)
        this.subcategoriaAlimentoService.subcategories = res as SubcategoriaAlimento[];
      });
    console.log("ID CAT:", this.idCategoria)
  }


  editSubCategory(subcategory: SubcategoriaAlimento) {
    this.subcategoriaAlimentoService.selectedsubCategory._id = subcategory._id;
    this.subcategoriaAlimentoService.selectedsubCategory.name = subcategory.name;
  }

  deleteSubCategory(_id: string) {
    this.subcategoriaAlimentoService.deleteSubCategory(_id)
      .subscribe(res => {
        this.getSubCategories();
      });
  }


  //Reset Form
  resetForm(data) {
    
      data.reset();
      this.subcategoriaAlimentoService.selectedsubCategory = new SubcategoriaAlimento();
    }
  
}
