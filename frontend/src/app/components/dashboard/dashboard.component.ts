import { ModalEditCategoriaComponent } from './../modal-edit-categoria/modal-edit-categoria.component';

import { Component, OnInit } from '@angular/core';
import { CategoriaAlimentoService } from '../../services/categoria-alimento.service'
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaAlimento } from 'src/app/models/categoria-alimento';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // categories: CategoriaAlimento[];

  dialogEditCategoria: MatDialogRef<ModalEditCategoriaComponent>;

  preview: string;
  form: FormGroup;
  percentDone: any = 0;

  Categorias: any = [];

  constructor(
    public fb: FormBuilder,
    private categoriaAlimentoService: CategoriaAlimentoService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    // Reactive Form
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagen: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.getCategories();
  }
  
  //Preview Image
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

  submitForm(formData: any, formDirective: NgForm) {
        console.log(this.form.value.imagen);
        this.categoriaAlimentoService.postCategory(
          this.form.value.name,
          this.form.value.description,
          this.form.value.imagen
        )
          .subscribe(res => {
            // console.log(res)
            this._snackBar.open("Categoria Agregada", "Cerrar", {
              duration: 2000,
            });
            this.resetForm(formDirective);
            this.getCategories();
          }); 
  }

  //Get Categories
  getCategories() {
    this.categoriaAlimentoService.getCategories() //Trae Categorias 
      .subscribe((res) => {
        this.Categorias = res as CategoriaAlimento[];
      })
  }

  deleteCategory(_id: string) {
    this.categoriaAlimentoService.deleteCategory(_id)
      .subscribe(res => {
        this._snackBar.open("Categoria Eliminado", "Cerrar", {
          duration: 2000,
        });
        this.getCategories();
      });
  }

  //Reset Form
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.preview = null;
      this.categoriaAlimentoService.selectedCategory = new CategoriaAlimento();
    }
  }

  ModalEditCategoria(id, name, description, img){
    this.dialogEditCategoria = this.dialog.open(ModalEditCategoriaComponent, {
      data: {
        idCategoria: id,
        name: name,
        description: description,
        img: img
      }
    });
    this.dialogEditCategoria.afterClosed().subscribe(()=> {
      this.getCategories();
    });
  }
}
