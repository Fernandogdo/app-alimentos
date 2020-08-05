import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubcategoriaAlimentoService } from 'src/app/services/subcategoria-alimento.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubcategoriaAlimento } from 'src/app/models/subcategoria-alimento';

@Component({
  selector: 'app-modal-edit-subcategoria',
  templateUrl: './modal-edit-subcategoria.component.html',
  styleUrls: ['./modal-edit-subcategoria.component.css']
})
export class ModalEditSubcategoriaComponent implements OnInit {

  preview: string;
  form: FormGroup;
  name;
  idSubcategoria;
  idCategoria;
  subCategoriaSelected;
  oneSubCategoria = [] as SubcategoriaAlimento


  constructor(
    public fb: FormBuilder,
    private subcategoriaAlimentoService: SubcategoriaAlimentoService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Reactive Form
    this.form = this.fb.group({
      name: ['', Validators.required],
      imagen: [null]
    })
  }


  ngOnInit() {
    this.idSubcategoria = this.data.idSubcategoria;
    this.idCategoria = this.data.idCategoria;
    this.name = this.data.name;
    this.subCategoriaSelected = this.idSubcategoria;
    this.getSubCategoria(this.subCategoriaSelected)
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


  getSubCategoria(idSubCategoria) {
    this.subcategoriaAlimentoService.getOneSubCategoria(idSubCategoria)
      .subscribe(res => {
        this.oneSubCategoria = res
        this.form.patchValue({
          name: this.oneSubCategoria.name
          // description: this.oneCategoria.description,
        });
        this.preview = this.oneSubCategoria.imagen;
      });
    this.getSubCategories();

  }


  editSubCategory() {
    this.subcategoriaAlimentoService.putSubCategory(
      this.idSubcategoria,
      this.form.value.name,
      this.idCategoria,
      this.form.value.imagen
    )
      .subscribe(res => {
        this._snackBar.open("Categoria Actualizada", "Cerrar", {
          duration: 2000,
        });
        // this.ngOnInit()
        this.getSubCategories();
      });
  }

  getSubCategories() {
    this.subcategoriaAlimentoService.getSubCategory(this.idCategoria) //Toma el valor del empleado 
      .subscribe(res => {
        this.subcategoriaAlimentoService.subcategories = res as SubcategoriaAlimento[];
      });
    // console.log("ID CAT:", this.idCategoria)
  }

}
