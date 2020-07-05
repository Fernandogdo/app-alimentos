import { Alimento } from './../../models/alimento';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlimentoService } from 'src/app/services/alimento.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edita-alimento',
  templateUrl: './edita-alimento.component.html',
  styleUrls: ['./edita-alimento.component.css']
})
export class EditaAlimentoComponent implements OnInit {

  Alimentos: any = [];
  form: FormGroup;
  preview: string;
  idAlimento;
  oneAlimento;
  alimentoSelected;
  idSubcategoria;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alimentoService: AlimentoService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
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

  tipoEleccion = [
    'Si',
    'No'
  ];

  ngOnInit() {
    this.idAlimento = this.route.snapshot.params['id'];
    console.log('IDALIMENTO', this.idAlimento)

    this.alimentoSelected = this.idAlimento;
    this.getAlimento(this.alimentoSelected)
    this.getAlimentos()
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

  getAlimento(idAlimento) {
    this.alimentoService.getOneAlimento(idAlimento)
      .subscribe(res => {
        this.oneAlimento = res
        this.idSubcategoria = this.oneAlimento.subcategoria
        this.form.patchValue({
          autor: this.oneAlimento.autor,
          fecha: this.oneAlimento.fecha,               
          categoria: this.oneAlimento.categoria,          
          nombre_comun: this.oneAlimento.nombre_comun,
          nombre_cientifico: this.oneAlimento.nombre_cientifico,
          otro_nombre: this.oneAlimento.otro_nombre,         
          origen: this.oneAlimento.origen, 
          conservacion_alimento: this.oneAlimento.conservacion_alimento,  
          description: this.oneAlimento.description,
          temporada: this.oneAlimento.temporada,
          presentacion: this.oneAlimento.presentacion,
          unidades: this.oneAlimento.unidades,
          mercado: this.oneAlimento.mercado,
          supermercado: this.oneAlimento.supermercado,
          kilocalorias: this.oneAlimento.kilocalorias,
          glucidos: this.oneAlimento.glucidos,
          proteinas: this.oneAlimento.proteinas,
          lipidos: this.oneAlimento.lipidos,    
        });
        this.preview = this.oneAlimento.imagen;
        console.log('SERVER',res);
        console.log('IDSUBCATEGORIA',this.oneAlimento.subcategoria);
      });
  }

  editAlimento() {
 
    this.alimentoService.putAlimento(
      this.idAlimento,
      this.idSubcategoria,
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
      this.form.value.imagen,
    )
      .subscribe(res => {
        console.log(res);
        this._snackBar.open("Alimento Actualizada", "Cerrar", {
          duration: 2000,
        });
        console.log(res);
        this.getAlimento(this.idSubcategoria);
        this.router.navigate(['/visualiza', this.idSubcategoria])
        // "['/visualiza', idSubctegoria ]"
      });

     
     
  }

  getAlimentos() {
    this.alimentoService.getAlimentos() //Trae Categorias 
      .subscribe((res) => {
        // this.categoriaAlimentoService.categories = res as CategoriaAlimento[];
        this.Alimentos = res as Alimento[];
        console.log(res);
      })
  }
}
