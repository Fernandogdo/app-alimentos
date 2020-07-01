import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { UsersService} from './../../services/users.service';
import { Router} from '@angular/router';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-visualiza-usuarios',
  templateUrl: './visualiza-usuarios.component.html',
  styleUrls: ['./visualiza-usuarios.component.css']
})
export class VisualizaUsuariosComponent implements OnInit {
  private usersdata = [] as User;

  constructor(private userService: UsersService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getusersinformation();
  }

  getusersinformation() {
    this.userService.getUsers()
      .subscribe(res => {
        this.usersdata =  res;
        console.log(res);
      });

  }

  deleteuserinformation(userid) {
    this.userService.deleteUser(userid)
      .subscribe(res => {
        this._snackBar.open("Sub Categoria Eliminada", "Cerrar", {
          duration: 2000,
        });
        this.getusersinformation();
        console.log(res);
      });

  }

}
