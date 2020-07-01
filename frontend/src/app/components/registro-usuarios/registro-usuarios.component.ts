import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  user = {} as User;
  constructor(private userService: UsersService) { }

  ngOnInit() {
   
  }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  addNewUser(form:NgForm) {
    console.log(form.value);
    console.log(form.value.isStaff);
    if (form.value.isAdmin === undefined) {
      form.value.isAdmin = false;
    }
    if (form.value.isStaff === undefined) {
      form.value.isStaff = false;
    }
    console.log(form.value);
    this.userService.postUser(form.value)
      .subscribe((nuevaRetroalimentacion) => {
        console.log(nuevaRetroalimentacion);
        console.log('Se guardo')
        this.resetForm();
      });
    
  }

  resetForm(form? : NgForm) {
    if (form) {
      form.reset();
      
    }
  }
 

}
