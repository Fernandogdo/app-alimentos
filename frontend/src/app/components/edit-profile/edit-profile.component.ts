import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user = {} as User;
  userdata = {} as User;
  userselected;
  form: FormGroup;
  preview: string;
  hide = true;
  constructor(private userService: UsersService, public fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private routed: Router) {
    this.form = this.fb.group({
      name: [''],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      username: [''],
      password: [''],
      imagen: [null]
    })
  }

  ngOnInit() {
    this.userselected = this.route.snapshot.params['id'];
    this.getuserinformation(this.userselected);
  }


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
          password: this.userdata.password
        });

        this.preview = this.userdata.imagen;
      });
  }

  modifyProfileUser(formData: any, formDirective: NgForm) {
    console.log(this.form.value);

    this.userService.putUser(
      this.userselected,
      this.form.value.name,
      this.form.value.lastname,
      this.form.value.email,
      this.userdata.username,
      this.form.value.password,
      this.userdata.isAdmin,
      this.userdata.isStaff,
      this.form.value.imagen,
    )
      .subscribe(res => {
        console.log(res)
        this.routed.navigate(['/profile']);
        this._snackBar.open('Información Actulizada', 'Cerrar', {
          duration: 2000,
        });
        this.resetForm(formDirective);
        //   this.getCategories();
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

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.preview = null;
    }
  }


}
