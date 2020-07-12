import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationsService } from '../services/validations.service';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private validateS: ValidationsService,  private route: Router){

  }

  canActivate(): boolean{
    if (this.validateS.signedin()) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
  

