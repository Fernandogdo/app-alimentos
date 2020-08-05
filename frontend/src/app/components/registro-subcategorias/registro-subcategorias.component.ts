import { SubcategoriaAlimentoService } from './../../services/subcategoria-alimento.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SubcategoriaAlimento } from '../../models/subcategoria-alimento';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalEditSubcategoriaComponent } from '../modal-edit-subcategoria/modal-edit-subcategoria.component';
import { CategoriaAlimentoService } from 'src/app/services/categoria-alimento.service';
import { CategoriaAlimento } from 'src/app/models/categoria-alimento';

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
  categoria;
  nombreCategoria;
  _id: string;
  name: string = "";

  Categorias: any = [];

  // subcategoria = {} as SubcategoriaAlimento;
  public subcategoria: SubcategoriaAlimento = {};
  constructor(
    private subcategoriaAlimentoService: SubcategoriaAlimentoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dialog2: MatDialog,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private categoriaAlimentoService: CategoriaAlimentoService
  ) {
    // Reactive Form
    this.form = this.fb.group({
      name: ['', Validators.required],
      imagen: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params['id'];
    // console.log(this.idCategoria)
    this.getSubCategories();
    // setTimeout(() => {
      
    // }, 500);
    this.getCategories();
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
  
  getSubCategories() {
    this.subcategoriaAlimentoService.getSubCategory(this.idCategoria) //Toma el valor del empleado 
      .subscribe(res => {
        // console.log(res)
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

  getCategories() {
    this.categoriaAlimentoService.getCategoria(this.idCategoria) //Trae Categorias 
      .subscribe((res) => {
        // console.log(res);
        this.categoria = res;
        this.nombreCategoria = this.categoria.name;
        // console.log(this.nombreCategoria);
        this.Categorias = res as CategoriaAlimento[];
      })
  }

  //Reset Form
  resetForm(data) {
    data.reset();
    this.subcategoriaAlimentoService.selectedsubCategory = new SubcategoriaAlimento();
  }

}
