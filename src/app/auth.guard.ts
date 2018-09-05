import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private currentUser: IUser;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


      if (this.getCurrentUser()) {
        return true;
      } else {
        return false;
      }
  }

  getCurrentUser(): IUser {
      const user: IUser = JSON.parse(localStorage.getItem('currentUser'));
      return user;
  }
}
