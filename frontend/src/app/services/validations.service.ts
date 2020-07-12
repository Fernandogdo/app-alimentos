import { Injectable } from '@angular/core';
import { UsersService } from './../services/users.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  userdata = {} as User;
  constructor(private userService: UsersService) { }

  signedin(){
    return !!localStorage.getItem("token");
  }

  priviligiesAdmin(): Boolean{
    let iduser =  localStorage.getItem("userid");
    this.userService.getOneUser(iduser)
      .subscribe(res => {
        this.userdata = res; 
        
      });
    return this.userdata.isAdmin;
  }

  priviligies(): User{
    let iduser =  localStorage.getItem("userid");
    this.userService.getOneUser(iduser)
      .subscribe(res => {
        this.userdata = res; 
        
      });
    return this.userdata;
  }

  logout(){
    localStorage.clear();
  }
}
