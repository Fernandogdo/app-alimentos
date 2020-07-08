import { Component, OnInit } from '@angular/core';
import { LoginService} from './../../services/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
   
  }
  
  signIn(){
    this.loginService.checkinformation(this.user)
    .subscribe(res => {
      //this.loginService = res as SubcategoriaAlimento[]; 
      console.log(res);
      localStorage.setItem('userid', res.usuario._id);
      localStorage.setItem('usuario', res.usuario.name +' '+ res.usuario.lastname);
      localStorage.setItem('token',res.token);
      this.route.navigate(['/dashboard']);
    });  
  }
  
}



