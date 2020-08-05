import { SubcategoriaAlimentoService } from './../../services/subcategoria-alimento.service';
import { GoogleServiceService } from './../../services/google-service.service';
import { ModalObjetosComponent } from './../modal-objetos/modal-objetos.component';
import { Component, OnInit, Input } from '@angular/core';
import { AlimentoService } from './../../services/alimento.service';
import { Alimento } from 'src/app/models/alimento';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-registro-alimentos',
  templateUrl: './registro-alimentos.component.html',
  styleUrls: ['./registro-alimentos.component.css']
})
export class RegistroAlimentosComponent implements OnInit {


  dialogObjetos: MatDialogRef<ModalObjetosComponent>;
  objetos;
  idObjeto;
  // modelo3d: string;
  // @Input() idObjeto:string;
  subcategoria;
  elementoSubcategoria;
  nombreSubcategoria;
  form: FormGroup;
  preview: string;
  GoogleAuth;
  id_JSON = "1kxnsJSqhBSr95xb_BNpaNWXmhNSl2QGj"
  Objeto;
  public idCategoria;
  constructor(
    public fb: FormBuilder,
    private alimentoService: AlimentoService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private googleService: GoogleServiceService,
    private subcategoriaAlimentoService: SubcategoriaAlimentoService,
    
  ) {
    this.form = this.fb.group({
      subcategoria: [''],
      autor: ['', Validators.required],
      fecha: ['', Validators.required],
      categoria: ['', Validators.required],
      nombre_comun: ['', Validators.required],
      nombre_cientifico: [''],
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
      modelo3d: [''],
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
    // console.log('IDSUBCATEGORIA', this.subcategoria);
    // this.googleSDK();
    this.getJson()
    this.getSubcategoria();
    // this.getCategoria();
  }

  getJson() {
    this.googleService.getJson(this.id_JSON).subscribe(res => {
      // console.log(res);
      this.objetos = res;
    }
  )}

  getIdEstado(e) {
    // console.log('IdObjeto:', e);
    this.idObjeto = e;
    // console.log('idEstado:', this.idObjeto);
  }

  getSubcategoria(){
    this.subcategoriaAlimentoService.getOneSubCategoria(this.subcategoria)
    .subscribe(res=>{
      this.elementoSubcategoria = res;
      this.idCategoria = this.elementoSubcategoria.categoria;
      this.nombreSubcategoria = this.elementoSubcategoria.name;
    });
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
    // console.log('IDOBJETOENVIOFORM',this.idObjeto)
    // console.log(this.form.value.imagen);
    // console.log('RAIDSUB',this.subcategoria);
    // console.log(this.form.value.modelo3d)
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
      this.form.value.modelo3d,    
      this.form.value.imagen,
    )
  
      .subscribe(res => {
        // console.log(res)
        this._snackBar.open("Alimento Agregado", "Cerrar", {
          duration: 2000,
        });
        this.resetForm(formDirective);
        // this.getCategories();
      });
  }
  
  ModalObjetos(){
    this.dialogObjetos = this.dialog.open(ModalObjetosComponent);
    this.dialogObjetos.afterClosed().subscribe(()=> {
      // this.getCategories();
    });
  }


  procesaPropagar(idObjeto) {
    this.Objeto = idObjeto;
    // console.log('IDOBJETO',this.Objeto);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.alimentoService.selectedAlimento = new Alimento();
    }
  }
}
