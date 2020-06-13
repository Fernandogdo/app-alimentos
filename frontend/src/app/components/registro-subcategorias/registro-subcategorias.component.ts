import { ModalSubcategoriaComponent } from './../modal-subcategoria/modal-subcategoria.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-registro-subcategorias',
  templateUrl: './registro-subcategorias.component.html',
  styleUrls: ['./registro-subcategorias.component.css']
})
export class RegistroSubcategoriasComponent implements OnInit {

  dialogRoom: MatDialogRef<ModalSubcategoriaComponent>;
  // dialogRoom1: MatDialogRef<ModalPinComponent>;
  

  constructor(
    public dialog: MatDialog,
    public dialog2: MatDialog,
  ) { }

  ngOnInit() {
  }

  ModalSubcategoria() {
    this.dialog.open(ModalSubcategoriaComponent);
  }

}
