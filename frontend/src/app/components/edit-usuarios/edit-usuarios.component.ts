import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators FormGroup, FormBuilder } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.css']
})
export class EditUsuariosComponent implements OnInit {
  user = {} as User;
  userdata = {} as User;
  userselected;
  form: FormGroup;
  preview: String;
  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: [''],
      lastname: [''],
      email: ['',[Validators.required, Validators.email]],
      username: [''],
      password: [''],
      isAdmin: [''],
      isStaff: [''],
      imagen: [null]
    })
  }

  ngOnInit() {

    this.userselected = this.route.snapshot.params['id'];
 
    this.getuserinformation(this.userselected)

  }

  hide = true;
  getErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email').hasError('email') ? 'No es un correo valido' : '';
  }

  getuserinformation(user_id) {
    this.userService.getOneUser(user_id)
      .subscribe(res => {
        this.userdata = res;
        console.log(res);
        this.form.patchValue({
          name: this.userdata.name,
          lastname: this.userdata.lastname,
          email: this.userdata.email,
          username: this.userdata.username,
          password: this.userdata.password,
          isAdmin: this.userdata.isAdmin,
          isStaff: this.userdata.isStaff
        });

        this.preview = this.userdata.imagen;
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

  modifyUser(formData: any, formDirective: NgForm) {
    
    if (this.form.value.isAdmin === undefined || this.form.value.isAdmin === '') {
      this.form.value.isAdmin = false;
    }
    if (this.form.value.isStaff === undefined || this.form.value.isStaff === '' ) {
      this.form.value.isStaff = false;
    }
    console.log(this.form.value);

    this.userService.putUser(
      this.userselected,
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
        this._snackBar.open("Usuario Editado", "Cerrar", {
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


