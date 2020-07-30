import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomvalidationsService } from './../../services/customvalidations.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  user = {} as User;
  form: FormGroup;
  preview: String;
  constructor(private userService: UsersService, public fb: FormBuilder, private _snackBar: MatSnackBar, private customValidator: CustomvalidationsService) {
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      lastname: [''],
      email: ['',[Validators.required, Validators.email]],
      username: ['',[Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: [''],
      isAdmin: [''],
      isStaff: [''],
      imagen: [null]
    });
  }

  hide = true;

  getErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email').hasError('email') ? 'No es un correo valido' : '';
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


  addNewUser(formData: any, formDirective: NgForm) {
    
    if (this.form.value.isAdmin === undefined || this.form.value.isAdmin === '') {
      this.form.value.isAdmin = false;
    }
    if (this.form.value.isStaff === undefined || this.form.value.isStaff === '' ) {
      this.form.value.isStaff = false;
    }
    console.log(this.form.value);
    this.userService.postUser(
      this.form.value.name,
      this.form.value.lastname,
      this.form.value.email,
      this.form.value.username,
      this.form.value.password,
      this.form.value.isAdmin,
      this.form.value.isStaff,
      this.form.value.imagen,

    )
      .subscribe(res => {
        console.log(res)
        this._snackBar.open("Usuario Agregado", "Cerrar", {
          duration: 2000,
        });
        this.resetForm(formDirective);
        //   this.getCategories();
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.preview = null;
    }
  }
  
}
