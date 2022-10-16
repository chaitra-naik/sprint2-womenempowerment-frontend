import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route:Router, private loginServ:LoginService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.loginServ.isUserLoggedIn()){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
}
