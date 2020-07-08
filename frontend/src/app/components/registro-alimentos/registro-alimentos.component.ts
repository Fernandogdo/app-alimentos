import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlimentoService } from './../../services/alimento.service';
import { Alimento } from 'src/app/models/alimento';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-alimentos',
  templateUrl: './registro-alimentos.component.html',
  styleUrls: ['./registro-alimentos.component.css']
})
export class RegistroAlimentosComponent implements OnInit {


  subcategoria;
  form: FormGroup;
  preview: string;

  constructor(
    public fb: FormBuilder,
    private alimentoService: AlimentoService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      subcategoria: [''],
      autor: ['', Validators.required],
      fecha: ['', Validators.required],
      categoria: ['', Validators.required],
      nombre_comun: ['', Validators.required],
      nombre_cientifico: ['', Validators.required],
      otro_nombre: ['', Validators.required],
      origen: ['', Validators.required],
      conservacion_alimento: ['', Validators.required],
      description: ['', Validators.required],
      temporada: ['', Validators.required],
      presentacion: ['', Validators.required],
      unidades: ['', Validators.required],
      mercado: ['', Validators.required],
      supermercado: ['', Validators.required],
      kilocalorias: ['', Validators.required],
      glucidos: [''],
      proteinas: [''],
      lipidos: [''],
      imagen: [null],
    })
  }

  // mercadoSupermercado: string = 'si';

  tipoEleccion = [
    'Si',
    'No'
  ];

  ngOnInit() {
    this.subcategoria = this.route.snapshot.params['id'];
    console.log('IDSUBCATEGORIA', this.subcategoria);
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

  submitForm(formData: any, formDirective: NgForm) {
    console.log(this.form.value.imagen);
    console.log('RAIDSUB',this.subcategoria);
    this.alimentoService.postAlimento(
      this.subcategoria,
      this.form.value.autor,
      this.form.value.fecha,               
      this.form.value.categoria,          
      this.form.value.nombre_comun,
      this.form.value.nombre_cientifico,
      this.form.value.otro_nombre,         
      this.form.value.origen, 
      this.form.value.conservacion_alimento,  
      this.form.value.description,
      this.form.value.temporada,
      this.form.value.presentacion,
      this.form.value.unidades,
      this.form.value.mercado,
      this.form.value.supermercado,
      this.form.value.kilocalorias,
      this.form.value.glucidos,
      this.form.value.proteinas,
      this.form.value.lipidos,    
      this.form.value.imagen
    )
      .subscribe(res => {
        // console.log(res)
        this._snackBar.open("Categoria Agregada", "Cerrar", {
          duration: 2000,
        });
        this.resetForm(formDirective);
        // this.getCategories();
      });
  }

  // addAlimento(form: NgForm) {
  //   this.alimentoService.postAlimento(form.value)
  //     .subscribe(res => {
  //       console.log(res);
  //       this._snackBar.open("Alimento Agregado", "Cerrar", {
  //         duration: 2000,
  //       });
  //       this.resetForm(form);
  //     });
  // }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.alimentoService.selectedAlimento = new Alimento();
    }
  }
}
