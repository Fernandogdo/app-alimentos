import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationsService } from '../services/validations.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccessWebGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private validateS: ValidationsService, private route: Router, private _snackBar: MatSnackBar){

  }
  canActivate(): boolean {
    if (this.validateS.priviligies().isAdmin == true || this.validateS.priviligies().isStaff == true){
      return true;
    } 
    if(this.validateS.priviligies().isAdmin == false && this.validateS.priviligies().isStaff == false){
      
      this._snackBar.open("No tiene acceso", "Cerrar", {
        duration: 1000,
      });
      this.route.navigate(['/login']);
      return false;
    }
  }
  
}
