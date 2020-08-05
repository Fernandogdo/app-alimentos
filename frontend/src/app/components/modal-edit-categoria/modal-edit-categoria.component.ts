import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaAlimento } from 'src/app/models/categoria-alimento';
import { CategoriaAlimentoService } from 'src/app/services/categoria-alimento.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-modal-edit-categoria',
  templateUrl: './modal-edit-categoria.component.html',
  styleUrls: ['./modal-edit-categoria.component.css']
})
export class ModalEditCategoriaComponent implements OnInit {

  preview: string;
  form: FormGroup;
  percentDone: any = 0;
  idCategoria;
  name;
  description;
  imagen
  categoriaSelected;
  oneCategoria = [] as CategoriaAlimento;

  Categorias: any = [];

  constructor(
    public fb: FormBuilder,
    private categoriaAlimentoService: CategoriaAlimentoService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    // Reactive Form
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagen: [null]
    })
  }

  ngOnInit() {
    this.idCategoria = this.data.idCategoria;
    // this.setValues();
    this.name = this.data.name;
    this.getCategories();
    this.description = this.data.description;
    this.imagen = this.data.img;
    this.categoriaSelected = this.idCategoria;
    this.getCategoria(this.categoriaSelected)
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

  getCategoria(idCategoria){
    this.categoriaAlimentoService.getCategoria(idCategoria)
      .subscribe(res => {
        this.oneCategoria = res
        this.form.patchValue({
          name: this.oneCategoria.name,
          description: this.oneCategoria.description,
        });
        this.preview = this.oneCategoria.imagen;
      });
      this.getCategories();
  }

  editCategory() {
    var mandarname;
    var mandardescripcion

    if (this.name != this.form.value.name) {
      mandarname = this.form.value.name
    } else{
      mandarname = this.name
    }

    if (this.description != this.form.value.description) {
      mandardescripcion = this.form.value.description
    } else {
      mandardescripcion = this.description
    }
    
    this.categoriaAlimentoService.putCategory(
      this.idCategoria,
      mandarname,
      mandardescripcion,
      this.form.value.imagen
    )
      .subscribe(res => {
        this._snackBar.open("Categoria Actualizada", "Cerrar", {
          duration: 2000,
        });
        this.getCategories();
      });
  }

  getCategories() {
    this.categoriaAlimentoService.getCategories() //Trae Categorias 
      .subscribe((res) => {
        // this.categoriaAlimentoService.categories = res as CategoriaAlimento[];
        this.Categorias = res as CategoriaAlimento[];
      })
  }
}
