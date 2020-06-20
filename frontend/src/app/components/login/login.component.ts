import { Component, OnInit } from '@angular/core';
import { LoginService} from './../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
   
  }
  
  signIn(){
    this.loginService.checkinformation(this.user)
    .subscribe(res => {
      //this.loginService = res as SubcategoriaAlimento[];
     
      console.log(res);
    });  
  }
  
}



