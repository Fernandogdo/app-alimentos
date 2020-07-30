import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UsersService } from './../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationsService {

  constructor(private userService: UsersService) { }
  resp;
  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1200);
    
    });
  }

  validateUserName(userName: string) {
    const UserList = ['admin', 'user', 'superuser']
    if (userName != undefined || userName == "") {
      
    
    this.userService.checkingaUser(userName).subscribe(res =>{
      this.resp = res;
      
    });

  
    UserList.push(this.resp.username);
  }
    
    return (UserList.indexOf(userName) > -1);
  }
}
