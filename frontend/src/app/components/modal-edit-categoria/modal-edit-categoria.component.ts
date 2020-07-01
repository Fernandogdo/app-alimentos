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
      img: [null]
    })
  }

  ngOnInit() {
    this.idCategoria = this.data.idCategoria;
    console.log('IDCATEGORIA:', this.idCategoria);
    // this.setValues();
    this.name = this.data.name;
    console.log('NombreCat:', this.name);
    this.getCategories();
    this.description = this.data.description;
    console.log('Descripcion:', this.description);
    this.imagen = this.data.img;
    console.log('Imagen:', this.imagen);
  }

  // setValues(){
  //   this.categoriaAlimentoService.obtenerCategoria(this.idCategoria).subscribe(res=>{
  //     this.form.get('name').setValue(res.name)
  //     this.form.get('description').setValue(res.description)
  //     this.form.get('img').setValue(res.img)
  //   })
  // }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      img: file
    });
    this.form.get('img').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  editCategory(){
    // console.log(this.idCategoria);
    // console.log(this.form.value.name);
    console.log('FORMIMG',this.form.value.img);
    console.log('Imagen', this.imagen);

    if (this.form.value.img) {
      // window.alert('Ingrese la Imagen');
      this.categoriaAlimentoService.putCategory(
        this.idCategoria,
        this.name,
        this.description,
        this.form.value.img
      )
      .subscribe(res => {
        console.log(res);
        this._snackBar.open("Categoria Actualizada", "Cerrar", {
          duration: 2000,
        });
        // this.ngOnInit()
        // this.getCategories();
      });
      
    } 

    if (this.form.value.img === undefined || this.form.value.img === null ) {
      this.categoriaAlimentoService.putCategory(
        this.idCategoria,
        this.form.value.name,
        this.form.value.description,
        this.form.value.img = this.imagen
      )
      .subscribe(res => {
        console.log(res);
        this._snackBar.open("Categoria Actualizada", "Cerrar", {
          duration: 2000,
        });
        // this.ngOnInit()
        // this.getCategories();
      });
    }
    
    
    // else {
    //   window.alert('Ingrese la Imagen');
    //   this.categoriaAlimentoService.putCategory(
    //     this.idCategoria,
    //     this.form.value.name,
    //     this.form.value.description,
    //     this.form.value.img
    //   )
    //   .subscribe(res => {
    //     console.log(res);
    //     this._snackBar.open("Categoria Actualizada", "Cerrar", {
    //       duration: 2000,
    //     });
    //     // this.ngOnInit()
    //     // this.getCategories();
    //   });
    // }
  }

  actualizar(){
    this.ngOnInit();
  }

  getCategories() {
    this.categoriaAlimentoService.getCategories() //Trae Categorias 
      .subscribe((res) => {
        // this.categoriaAlimentoService.categories = res as CategoriaAlimento[];
        this.Categorias = res as CategoriaAlimento[];
        console.log(res);
      })
  }

//   submitForm(formData: any, formDirective: NgForm) {
//     if (!this.form.value.img) {
//       window.alert('Ingresa la Imagen!')
//     } else {
//       this.categoriaAlimentoService.postCategory(
//         this.form.value.name,
//         this.form.value.description,
//         this.form.value.img
//       )
//         .subscribe(res => {
//           console.log(res)
//           this._snackBar.open("Categoria Agregada", "Cerrar", {
//             duration: 2000,
//           });
//           this.resetForm(formDirective);
//           // this.form.markAsPristine();
//           // this.form.markAsUntouched();
//           this.form.value.img = null;
//           this.getCategories();
//         });
//     }
// }
  

}
