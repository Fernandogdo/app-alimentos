import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationsService } from '../services/validations.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private validateS: ValidationsService, private route: Router, private _snackBar: MatSnackBar) {

  }
  canActivate(): boolean {
    if (this.validateS.priviligiesAdmin()) {
      return true;
    } else {
      // this.route.navigate(['/dashboard']);
      this._snackBar.open("No tiene acceso", "Cerrar", {
        duration: 2000,
      });
      return false;

    }
  }
}
