import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.css']
})
export class EditUsuariosComponent implements OnInit {
  user = {} as User;
  userdata = {} as User;
  userselected;

  constructor(private userService: UsersService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.userselected = this.route.snapshot.params['id'];
    console.log(this.userselected)
    this.getuserinformation(this.userselected);

  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getuserinformation(user_id) {
    this.userService.getOneUser(user_id)
      .subscribe(res => {
        this.userdata = res;
        console.log(res);
      });

  }

  addNewUser(form: NgForm) {
    console.log(form.value);

    if (form.value.isAdmin === undefined) {
      form.value.isAdmin = false;
    }
    if (form.value.isStaff === undefined) {
      form.value.isStaff = false;
    }
    this.userService.putUser(form.value)
      .subscribe((nuevaRetroalimentacion) => {
        console.log(nuevaRetroalimentacion);
        console.log('Se actualizo')
        this.resetForm();
      });

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();

    }
  }
}