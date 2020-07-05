import { SubcategoriaAlimentoService } from './../../services/subcategoria-alimento.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SubcategoriaAlimento } from '../../models/subcategoria-alimento';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThrowStmt } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalEditSubcategoriaComponent } from '../modal-edit-subcategoria/modal-edit-subcategoria.component';

@Component({
  selector: 'app-registro-subcategorias',
  templateUrl: './registro-subcategorias.component.html',
  styleUrls: ['./registro-subcategorias.component.css']
})
export class RegistroSubcategoriasComponent implements OnInit {

  // dialogRoom1: MatDialogRef<ModalPinComponent>;
  // subcategorias: Observable<SubcategoriaAlimento[]>;
  dialogEditSubCategoria: MatDialogRef<ModalEditSubcategoriaComponent>;
  preview: string;
  form: FormGroup;
  idCategoria;
  _id: string;
  name: string = "";

  // subcategoria = {} as SubcategoriaAlimento;
  public subcategoria: SubcategoriaAlimento = {};
  constructor(
    private subcategoriaAlimentoService: SubcategoriaAlimentoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dialog2: MatDialog,
    private route: ActivatedRoute,
    public fb: FormBuilder,
  ) {
    // Reactive Form
    this.form = this.fb.group({
      name: ['', Validators.required],
      imagen: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params['id'];
    console.log(this.idCategoria)
    this.getSubCategories();
    // this.obtenerIdCategoria();
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      imagen: file
    });
    this.form.get('imagen').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  addSubCategory(formData: any, formDirective: NgForm) {
    console.log(this.form.value.imagen);
    console.log('SUBCATEGORIA', this.form.value.name);
    console.log('CATEGORIAID', this.idCategoria);
    this.subcategoriaAlimentoService.postSubCategory(
      this.form.value.name,
      this.idCategoria,
      this.form.value.imagen
    )
      .subscribe(res => {
        // console.log(res)
        this._snackBar.open("Categoria Agregada", "Cerrar", {
          duration: 2000,
        });
        this.resetForm(formDirective);
        this.getSubCategories();
      });
  }




  // addSubCategory(form: NgForm) {
  //   if (form.value._id) {
  //     this.subcategoriaAlimentoService.putSubCategory(form.value)
  //       .subscribe(res => {
  //         console.log(res);
  //         this.subcategoriaAlimentoService.selectedsubCategory._id='';
  //         this.subcategoriaAlimentoService.selectedsubCategory.name='';
  //         this._snackBar.open("Sub Categoria Actualizada", "Cerrar", {
  //           duration: 2000,
  //         });
  //         this.getSubCategories();

  //       })

  //   } else {
  //     this.subcategoriaAlimentoService.postSubCategory(form.value)
  //       .subscribe((nuevaRetroalimentacion) => {
  //         console.log(nuevaRetroalimentacion);
  //         console.log('se guardo');
  //         this.subcategoriaAlimentoService.selectedsubCategory.name='';
  //         this._snackBar.open("Sub Categoria Agregada", "Cerrar", {
  //           duration: 2000,
  //         });
  //         this.getSubCategories();
  //       });
  //       this.getSubCategories(); 
  //   }
  // }

  getSubCategories() {
    this.subcategoriaAlimentoService.getSubCategory(this.idCategoria) //Toma el valor del empleado 
      .subscribe(res => {
        console.log(res)
        this.subcategoriaAlimentoService.subcategories = res as SubcategoriaAlimento[];
      });
    // console.log("ID CAT:", this.idCategoria)
  }


  editSubCategory(subcategory: SubcategoriaAlimento) {
    this.subcategoriaAlimentoService.selectedsubCategory._id = subcategory._id;
    this.subcategoriaAlimentoService.selectedsubCategory.name = subcategory.name;
  }

  deleteSubCategory(_id: string) {
    this.subcategoriaAlimentoService.deleteSubCategory(_id)
      .subscribe(res => {
        this._snackBar.open("Sub Categoria Eliminada", "Cerrar", {
          duration: 2000,
        });
        this.getSubCategories();
      });
  }

  ModalEditSubCategoria(idSubcategoria, name, idCategoria, img){
    this.dialogEditSubCategoria = this.dialog.open(ModalEditSubcategoriaComponent, {
      data: {
        idSubcategoria: idSubcategoria,
        name: name,
        idCategoria: idCategoria,
        img: img
      }
    });
    this.dialogEditSubCategoria.afterClosed().subscribe(()=> {
      this.getSubCategories();
    });
  }

  //Reset Form
  resetForm(data) {

    data.reset();
    this.subcategoriaAlimentoService.selectedsubCategory = new SubcategoriaAlimento();
  }

}
