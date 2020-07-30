import { GoogleServiceService } from './../../services/google-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-objetos',
  templateUrl: './modal-objetos.component.html',
  styleUrls: ['./modal-objetos.component.css']
})
export class ModalObjetosComponent implements OnInit {

  id_JSON = "1kxnsJSqhBSr95xb_BNpaNWXmhNSl2QGj";
  objetos;
  idObjeto;
  favoriteSeason: string;

  @Output() public objetoId = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private googleService: GoogleServiceService
  ) { }

  ngOnInit() {
    this.getJson();
  }


  getJson() {
    this.googleService.getJson(this.id_JSON).subscribe(res => {
      console.log(res);
      this.objetos = res;
    }
  )}

  getIdEstado(e) {
    // console.log('IdObjeto:', e);
    this.idObjeto = e;
    console.log('idEstado:', this.idObjeto);
  }

  onPropagar(){
    this.objetoId.emit({id: this.idObjeto})
  }

  // showDateto(event) {
  //   //enseña lo que elegistes en el input
  //   alert((event.id));
  // }
}
