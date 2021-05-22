import { Injectable } from '@angular/core';
import { CanActivate, RouteReuseStrategy, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router : Router) { }

  canActivate(route , state: RouterStateSnapshot) {

    if (this.authService.isAuthenticated()) {
      return true;
       }
else{
  this.router.navigate(['/login'],{queryParams : {returnUrl: state.url}});
  return false;
 
}
   }  
  
}
  

