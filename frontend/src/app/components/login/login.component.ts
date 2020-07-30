import { Component, OnInit } from '@angular/core';
import { LoginService} from './../../services/login.service';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  constructor(private loginService: LoginService, private route: Router, private _snackBar: MatSnackBar, private validateS: ValidationsService) { }

  ngOnInit() {
    if (this.validateS.signedin()) {
      this.route.navigate(['/dashboard']);
    }
   
  }

  signIn() {
    this.loginService.checkinformation(this.user)
    .subscribe(res => {
      
      //this.loginService = res as SubcategoriaAlimento[]; 
      // console.log(res);
      if (res.usuario.isAdmin == true || res.usuario.isStaff == true ) {
        localStorage.setItem('userid', res.usuario._id);
        localStorage.setItem('usuario', res.usuario.name +' '+ res.usuario.lastname);
        localStorage.setItem('token',res.token);
        this.route.navigate(['/dashboard']);
      }
      // else{
      //   this._snackBar.open(res.mensaje, "Cerrar", {
      //     duration: 2000,
      //   });
      // }
      
    }, error => this._snackBar.open("Usuario o Contraseña Incorrectos", "Cerrar", {
      duration: 2000,
    })); 
    



    
  }

}



