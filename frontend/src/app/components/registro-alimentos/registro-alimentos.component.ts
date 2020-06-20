import { NgForm } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AlimentoService } from './../../services/alimento.service';
import { Alimento } from 'src/app/models/alimento';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registro-alimentos',
  templateUrl: './registro-alimentos.component.html',
  styleUrls: ['./registro-alimentos.component.css']
})
export class RegistroAlimentosComponent implements OnInit {

  
  idSubCategoria;

  constructor(
    private alimentoService: AlimentoService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
    ) 
  
    {
   
  }

  // mercadoSupermercado: string = 'si';

  tipoEleccion = [
    'Si',
    'No'
  ];

  ngOnInit() {
    this.idSubCategoria = this.route.snapshot.params['id'];
    console.log('IDSUBCATEGORIA',this.idSubCategoria);
  }
  

  addAlimento(form:NgForm){
    this.alimentoService.postAlimento(form.value)
      .subscribe(res => {
        console.log(res);
        this._snackBar.open("Alimento Agregado", "Cerrar", {
          duration: 2000,
        });
        this.resetForm(form);
      });  
  }

  resetForm(form?:NgForm){
    if (form) {
      form.reset();
      this.alimentoService.selectedAlimento = new Alimento();
    }
  }
}
